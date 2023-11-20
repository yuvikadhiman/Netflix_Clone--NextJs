import User from "@/model/User";
import connectDB from "@/utils/connectDB";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Error from "next/error";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";

export default nextAuth({
  session: {
    strategy:'jwt',
    jwt: true,
  },
  jwt:{
    secret:process.env.NEXTAUTH_JWT_SECRET
  },
  secret:process.env.NEXTAUTH_SECRET
  ,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      async authorize(credentials) {
        await connectDB(process.env.MONGO_URI);
        console.log("connected to user database");
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No User Found");
        }
        const isPasswordCorrect = await user.comparePassword(
          credentials.password
          );
          if (!isPasswordCorrect) {
            throw new Error("invalid Credentials");
          }
          return {
          user: {
            name: user.name,
            email: user.email,
          },
        };
      },
    }),
  ],

});
