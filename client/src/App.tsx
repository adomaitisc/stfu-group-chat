import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Explore from "./Explore";
import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-[100vw] h-[100vh] overflow-hidden bg-zinc-900 flex flex-col justify-start items-center">
        <Navbar />
        <div className="w-3/4 h-full bg-zinc-800 mb-20 mt-8 rounded-3xl p-12">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
