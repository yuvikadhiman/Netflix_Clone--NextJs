import connectDB from "@/utils/connectDB";
import User from "@/model/User";
import { NextApiRequest, NextApiResponse } from "next";

const SignupHandler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  try {
    const { name, email, password } = req.body;
    if (
      !email.includes("@") ||
      !email ||
      password.trim() === "" ||
      !password ||
      name.trim() === "" ||
      !name
    ) {
      throw new Error("Empty input fields");
    }
    await connectDB(process.env.MONGO_URI);
    console.log("connected to user database");
    const Existinguser = await User.findOne({ email: email });
    if (Existinguser) {
      return res.status(409).json({error:'invalid credential'});
    }

    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    if (!token) {
      return res.status(422).json({error:'invalid credential'});
    }
    return res.status(201).json({
      user: {
        name: user.name,
        email: user.email,
        token,
      },
      message: "User signedIn",
    });
  } catch (err) {
    console.log(err);
  }
};

export default SignupHandler;
