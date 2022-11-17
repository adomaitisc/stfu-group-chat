import { useState } from "react";

const Join = () => {
  const [view, setView] = useState("register");

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-start">
        <p className="text-base font-light">Software to Feel United</p>
        <h1 className="text-4xl font-bold">Welcome to STFU</h1>
        <div className="mt-4 flex flex-col gap-y-2 w-4/5">
          {view === "register" && (
            <input
              className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
              placeholder="Username"
            />
          )}
          <input
            className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
            placeholder="Email"
          />
          <input
            className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
            placeholder="Password"
          />
        </div>
        <div className="mt-4 flex justify-between items-start w-4/5">
          <button className="bg-sky-500 text-stone-800 text-xl font-bold py-1 px-3.5 rounded">
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
