import connectDB from "@/utils/connectDB";
import User from "@/model/User";
import { toast } from "react-toastify";

const SignupHandler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, password } = req.body;
  if (
    !email.includes("@") ||
    !email ||
    password.trim() === "" ||
    !password ||
    name.trim() === "" ||
    !name
  ) {
    throw new Error("Invalid Credentials")
   
    // toast.error("Invalid Credentials");
  }
  await connectDB(process.env.MONGO_URI);
  console.log("connected to database");
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  if (!token) {
    throw new Error("Unable to Signup")
    // toast.error("Unable to Signup");
  }
  res.status(201).json({
    user: {  
      name: user.name,
      email: user.email,
      token,
    },
    message: "User signedIn",
  });

  console.log("User signedIn");
};

export default SignupHandler;
