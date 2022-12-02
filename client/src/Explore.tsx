import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Search from "./Search";
import { getCurrentUser } from "./services/auth.service";
import Trending from "./Trending";

const Explore = () => {
  const navigate: NavigateFunction = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (user === undefined) {
      navigate("/join");
    }
  });
  return (
    <div className="w-full">
      <Search />
      <Trending />
    </div>
  );
};

export default Explore;
