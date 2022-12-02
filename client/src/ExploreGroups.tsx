import { useEffect, useState } from "react";
import { url } from "./services/api";
import authHeader from "./services/auth-header";
import { GroupType } from "./App";
import { NavigateFunction, useNavigate } from "react-router-dom";

const ExploreGroups = () => {
  const navigate: NavigateFunction = useNavigate();

  const [groups, setGroups] = useState<GroupType[]>([]);

  useEffect(() => {
    fetch(url + "group", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
    }).then((res) => res.json().then((data) => setGroups(data)));
  }, []);

  const handleJoin = (groupid: number) => {
    fetch(url + "group/join/" + groupid, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
    }).then((res) =>
      res.json().then((data) => {
        navigate("/");
        window.location.reload();
      })
    );
  };

  return (
    <div className="mt-4 w-full grid-cols-3 grid gap-y-2 gap-x-1">
      {groups &&
        groups.map((group: GroupType) => (
          <div
            onClick={() => handleJoin(group.id)}
            key={group.id}
            className="w-full rounded-xl flex flex-row justify-start items-center hover:bg-stone-900/60 duration-300 px-2 py-2 truncate"
          >
            <img
              src="https://source.unsplash.com/random/?mars"
              alt="group image"
              className="w-16 h-16 rounded-lg"
            />
            <div className="flex flex-col justify-center items-start ml-4 overflow-ellipsis">
              <h1 className="text-base font-normal text-stone-300 truncate">
                {group.group_name}
              </h1>
              <h1 className="text-base font-normal text-stone-400">
                {group.member_count} Members
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExploreGroups;
