import User from "@/model/User";
import connectDB from "@/utils/connectDB";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default nextAuth({

  providers: [
    
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials:{
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error ('Email and password Required');
        }
        await connectDB(process.env.MONGO_URI);
        console.log("connected to user database");
        const user = await User.findOne({ email: credentials.email });
        console.log(user);
        if (!user) {
          return
        }
        const isPasswordCorrect = await user.comparePassword(
          credentials.password
        );
        if (!isPasswordCorrect) {
          return res.status(401).json({error:'Forbidden'});
        }
        // console.log(user)
        return user
      }
    })

  ],
  pages: {
    signIn: "/auth", // Customize this to your sign-in page
  },
  session: {
    strategy:'jwt',
    // jwt: true,
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

  
  
  
  
  
  
  
      // CredentialsProvider({
      //   id: "credentials",
      //   name: "credentials",
      //   credentials: {
      //     email: { label: "Email", type: "text" },
      //     password: { label: "Password", type: "password" },
      //   },
      //   async authorize(credentials) {
      //     if (!credentials?.email || !credentials?.password) {
      //       return 
      //     }
  
      //     await connectDB(process.env.MONGO_URI);
      //     console.log("connected to user database");
      //     const user = await User.findOne({ email: credentials.email });
      //     console.log(user);
      //     if (!user) {
      //       return
      //     }
      //     const isPasswordCorrect = await user.comparePassword(
      //       credentials.password
      //     );
      //     if (!isPasswordCorrect) {
      //       return res.status(401).json({error:'Forbidden'});
      //     }
      //     return user
      //   },
      // }),