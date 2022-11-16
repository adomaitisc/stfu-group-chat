import YourGroups from "./YourGroups";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-row items-start justify-start">
      <div className="w-1/3 h-full flex flex-col items-start justify-start">
        <h1 className="text-xl ml-4">Your Groups</h1>
        <YourGroups />
      </div>
      <div className="ml-4 w-2/3 h-full flex flex-col items-start justify-start">
        <h1 className="text-xl ml-4">STFU Chat</h1>
        <div className="mt-4 bg-stone-900 h-full w-full rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Home;
