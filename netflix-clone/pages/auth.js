import AuthPage from "@/components/loginPage/auth";
import React from "react";
import { getSession } from "next-auth/react";

const Login = () => {
  return <AuthPage />;
};
export async function getServerSideProps(context) {
  const session = await getSession({
    req: context.req,
  });
 
  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
export default Login;
