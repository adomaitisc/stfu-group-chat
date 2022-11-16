import { useState } from "react";
import ExploreGroups from "./ExploreGroups";

const Search = () => {
  const [active, setActive] = useState(false);
  // fetch data from the server
  const dummyData = [
    {
      id: 1,
      name: "Group 1",
      members: 10,
    },
    {
      id: 2,
      name: "Group 2",
      members: 20,
    },
    {
      id: 3,
      name: "Group 3",
      members: 30,
    },
    {
      id: 4,
      name: "Group 4",
      members: 40,
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <h1 className="text-2xl">Search</h1>
      <div className="w-3/4 flex mt-2">
        <input
          className="w-full rounded-xl py-2 px-6 font-light text-lg bg-zinc-700 text-zinc-200 outline-none placeholder:text-zinc-500"
          placeholder="Users, Groups, Tags"
        />
        <button
          onClick={() => {
            setActive(!active);
          }}
          className="bg-sky-500 text-white rounded-xl ml-4 py-2 px-6 font-light text-lg"
        >
          Search
        </button>
      </div>
      {active && <ExploreGroups />}
    </div>
  );
};

export default Search;
