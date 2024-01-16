import React, { useEffect, useRef, useState } from "react";
import classes from "./authform.module.css";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const Authform = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  // const FetchData = async (path, name,email,password) => {
  //   const response = await fetch(`/api/auth/${path}`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: name,
  //           email: email,
  //           password: password,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (!response.ok) {
  //           if (response.status === 409) {
  //             toast.error("Email already exist. Please check your Email.");
  //           } else if (response.status === 422) {
  //             toast.error("Unable to Signup");
  //           }
  //   }else{
  //     const response = await signIn("credentials", {
  //       redirect: false,
  //       email: email,
  //       password: password,
  //       callbackUrl: "/profile",
  //     });
  //     console.log(response);
  //     router.replace("/profile");
  //   }
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || (!isLogin && !name)) {
      toast.error("Please fill out all fields");
      return;
    }if(!isLogin){
      const response = await fetch(`/api/auth/signup`, {
              method: "POST",
              body: JSON.stringify({
                name: name,
                email: email,
                password: password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
      if (!response.ok) {
              if (response.status === 409) {
                toast.error("Email already exist. Please check your Email.");
              } else if (response.status === 422) {
                toast.error("Unable to Signup");
              }
        return;
      }
    }
    const response = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: "/profile",
    });
    // console.log(response);
    router.replace("/profile");
    if (!response.ok) {
      if (response.status === 401) {
        toast.error(" Unauthorized! Invalid Credentials");
      } 
    }
    setValues(initialState);
  }
  
  const switchAuthModeHandler = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <section className={classes.form_container}>
      <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <input
              type="name"
              name="name"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
              />
          </div>
        )}
        <div className={classes.control}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            />
        </div>
        <div className={classes.action}>
          <button> {isLogin ? "Login" : "Create Account"}</button>
        </div>
        <div className={classes.login_help}>
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <p> Need Help?</p>
        </div>

        <div className={classes.login_centers}>
          <div
            className={classes.login_google}
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            <FcGoogle size={30} />
          </div>
          <div
            className={classes.login_github}
            onClick={() => signIn("github", { callbackUrl: "/profile" })}
            >
            <FaGithub size={30} color={"rgb(1, 22, 39)"} />
          </div>
        </div>

        <div className={classes.signup_help}>
          <p>
            New to Netflix?
            <span
              className={classes.signup_link}
              onClick={switchAuthModeHandler}
              >
              {" "}
              {isLogin ? "Sign up now" : "Login"}
            </span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot
            <span style={{ color: "rgb(35, 46, 255)", fontSize: "16px" }}>
              {" "}
              Learn more.
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Authform;








    // if(isLogin){
    //   const response = await signIn("credentials", {
    //     redirect: false,
    //     email: email,
    //     password: password,
    //     callbackUrl: "/profile",
    //   });
    //   // console.log(response);
    //   router.replace("/profile");
    //   if (!response.ok) {
    //     if (response.status === 401) {
    //       toast.error(" Unauthorized! Invalid Credentials");
    //     } 
    //   }
    //   return;
    // }
    // FetchData("signup",name, email,password);
    
    // const register = async () => {
    //   try {
    //     const response = await fetch(`/api/auth/signup`, {
    //       method: "POST",
    //       body: JSON.stringify({
    //         name: name,
    //         email: email,
    //         password: password,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     console.log(response)
    //     router.push("/profile");
    //     if (!response.ok) {
    //       if (response.status === 409) {
    //         toast.error("Email already exist. Please check your Email.");
    //       } else if (response.status === 422) {
    //         toast.error("Unable to Signup");
    //       }
    //     }
    //     router.replace("/profile");
    //   } 
    //   catch (err) {
    //     console.log(err);
    //   }
    // if (isLogin) {
    //   loginUser();
    //   return;
    // }
    // else{
    //   register();
    // }
    // (isLogin)?loginUser():register();

    // fetchData("signup", name, email, password);
    // loginUser();
  
    