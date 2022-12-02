import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { login, register } from "./services/auth.service";

const Join = ({}: {}) => {
  const navigate: NavigateFunction = useNavigate();

  const [view, setView] = useState("register");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (view === "register") {
      setRegisterData({
        ...registerData,
        [e.target.id]: e.target.value,
      });
    } else {
      setLoginData({
        ...loginData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (view === "register") {
      register(
        registerData.name,
        registerData.email,
        registerData.password
      ).then(() => {
        navigate("/");
        window.location.reload();
      });
    } else {
      login(loginData.email, loginData.password).then(() => {
        navigate("/");
        window.location.reload();
      });
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-80 flex flex-col justify-center items-start">
        <p className="text-base font-light">Software to Feel United</p>
        <h1 className="text-4xl font-bold">Welcome to STFU</h1>
        <div className="mt-4 flex flex-col gap-y-2 w-full">
          {view === "register" && (
            <input
              onChange={(e) => handleChange(e)}
              className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
              id="name"
              placeholder="Username"
            />
          )}
          <input
            onChange={(e) => handleChange(e)}
            className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
            id="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => handleChange(e)}
            className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mt-4 flex justify-between items-start w-full">
          <button
            onClick={() => handleSubmit()}
            className="bg-sky-500 text-stone-800 text-xl font-bold py-1 px-3.5 rounded"
          >
            →
          </button>
          {view === "register" && (
            <button
              onClick={() => {
                setView("login");
              }}
              className="text-base font-light text-sky-500"
            >
              Already have an account?
            </button>
          )}
          {view === "login" && (
            <button
              onClick={() => {
                setView("register");
              }}
              className="text-base font-light text-sky-500"
            >
              Don't have an account?
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Join;
