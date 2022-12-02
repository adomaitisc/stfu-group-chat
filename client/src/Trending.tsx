import ExploreGroups from "./ExploreGroups";

const Trending = () => {
  return (
    <div className="mt-8 w-full flex flex-col items-start justify-start">
      {/* <h1 className="text-xl ml-4">Trending Groups</h1> */}
      <h1 className="text-xl ml-4">Explore Groups</h1>
      <ExploreGroups />
    </div>
  );
};

export default Trending;
