import Search from "./Search";
import Trending from "./Trending";

const Explore = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <Search />
      <Trending />
    </div>
  );
};

export default Explore;
