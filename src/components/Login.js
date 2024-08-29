import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute my-36 mx-auto right-0 left-0 bg-black w-3/12  p-12 bg-opacity-80 ">
        <h1 className="text-3xl font-bold text-white ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full my-4 p-4 text-white bg-gray-800 bg-opacity-60"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="w-full my-4 p-4 text-white bg-gray-800 bg-opacity-60 "
          type="email"
          placeholder="Email or Phone Number"
        />
        <input
          className="w-full my-4 p-4 bg-gray-800 text-white bg-opacity-60"
          type="password"
          placeholder="Password"
        />
        <button className="w-full my-4 p-2 bg-red-600 text-white font-bold rounded-md ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-white">
          <input type="checkbox" />
          <span className="ml-2">Remember me</span>
        </div>
        <div className="text-white">
          <span>{isSignInForm ? "New to NetFlix?" : "Already Registered"}</span>
          <span className="text-red-600 cursor-pointer" onClick={toggleSignUp}>
            {isSignInForm ? " Sign Up" : " Sign In now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
