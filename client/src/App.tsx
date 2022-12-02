import { createContext, useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Explore from "./Explore";
import Home from "./Home";
import Join from "./Join";
import Navbar from "./Navbar";
import Profile from "./Profile";

export type GroupType = {
  id: number;
  group_name: string;
  tag1: string | null;
  tag2: string | null;
  tag3: string | null;
  tag4: string | null;
  creator: string;
  member_count: number;
  image: string;
  created_at: string;
};

const App = () => {
  return (
    <div className="font-display w-[100vw] h-[100vh] overflow-hidden bg-black flex flex-col justify-start items-center">
      <Navbar />
      <div className="w-full max-w-4xl h-full bg-stone-800 mb-20 mt-8 rounded-[3rem] p-12 flex flex-col items-start justify-start text-white font-medium">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
      <a
        className="text-base text-sky-500 mb-4"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/adomaitisc/stfu-group-chat"
      >
        Star it on GitHub
      </a>
    </div>
  );
};

export default App;
