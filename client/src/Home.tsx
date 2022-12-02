import YourGroups from "./YourGroups";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { getCurrentUser } from "./services/auth.service";
import { useEffect } from "react";

const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (user === undefined) {
      navigate("/join");
    }
  });

  return (
    <div className="w-full h-full flex flex-row items-start justify-start">
      <div className="w-1/3 h-full flex flex-col items-start justify-start">
        <h1 className="text-xl ml-4">Your Groups</h1>
        <YourGroups />
      </div>
      <div className="ml-4 w-2/3 h-full flex flex-col items-start justify-start">
        <div className="px-4 w-full flex justify-between items-center">
          <h1 className="text-xl">STFU Chat</h1>
          <h1 className="text-lg font-normal text-stone-400">21 Members</h1>
        </div>
        <div className="mt-4 bg-stone-900 h-full w-full rounded-3xl"></div>
        <input
          className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-400"
          placeholder="Type a Message"
        />
      </div>
    </div>
  );
};

export default Home;
