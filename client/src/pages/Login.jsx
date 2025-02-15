import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onsubmitHandler = async(e) => {
       e.preventDefault();
    }
  return (
    <form
     onSubmit={onsubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
      action=""
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          name=""
          id=""
        />
      )}

      <input
        type="email"
        required
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email Address"
        name=""
        id=""
      />
      <input
        type=" password"
        required
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        name=""
        id=""
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="Cursor Pointer">Forgot Your Password?</p>
        {currentState ==='Login'? <p onClick={()=>setCurrentState('Sign Up')} className="cursor-pointer"  >Create Account</p>: <p onClick={()=>setCurrentState("Login")} className="cursor-pointer"> Login Here</p>}
      </div>
      <button type="submit" className="bg-black text-white font-light px-8 py-2">{currentState==="Login"?"Login":"Sign-Up"}</button>
    </form>
  );
};

export default Login;
