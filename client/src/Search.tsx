import { useState } from "react";
import ExploreGroups from "./ExploreGroups";

const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <h1 className="text-xl ml-4">Search</h1>
      <div className="w-3/4 flex mt-2">
        <input
          className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
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
