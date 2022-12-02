import React, { useEffect, useState } from "react";

import { url } from "./services/api";
import authHeader from "./services/auth-header";

import { GroupType } from "./App";

const YourGroups = ({ setSelected }: { setSelected: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState<GroupType[]>();

  useEffect(() => {
    fetch(url + "joined", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
    }).then((res) =>
      res.json().then((data) => {
        const groups = data.data;
        groups.forEach((relation: any) => {
          fetch(url + "group/" + relation.group_id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...authHeader(),
            },
          }).then((res) =>
            res.json().then((data) => {
              const group = data.data;
              console.log(group);
              setGroups((groups) => [...(groups || []), group["0"]]);
            })
          );
        });
      })
    );
  }, []);

  return (
    <div className="mt-4 w-full h-full flex flex-col gap-y-2 justify-between ">
      <div className="w-full h-full flex flex-col gap-y-2 justify-start items-start">
        {groups &&
          groups.map((group: GroupType) => (
            <div
              key={group.id}
              onClick={() => setSelected(group)}
              className="w-full rounded-xl flex flex-row justify-start items-center hover:bg-stone-900/60 duration-300 px-2 py-2"
            >
              <img
                src={group.image}
                alt="group image"
                className="w-12 h-12 rounded-lg text-sm"
              />
              <div className="flex flex-col justify-center items-start ml-3">
                <h1 className="text-sm font-normal text-stone-300 truncate">
                  {group.group_name}
                </h1>
                <h1 className="text-sm font-normal text-stone-400">
                  {group.member_count} Members
                </h1>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-2 bg-sky-500 py-2 rounded-xl text-lg"
      >
        Create Group
      </button>
      <CreateModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

const CreateModal = ({ isOpen, closeModal }: any) => {
  const [createdGroupId, setCreatedGroupId] = useState<string>("");
  const [groupData, setGroupData] = useState({
    group_name: "",
  });

  const handleChange = (e: any) => {
    setGroupData({ ...groupData, [e.target.id]: e.target.value });
  };

  const handleCreate = () => {
    fetch(url + "group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      body: JSON.stringify(groupData),
    }).then((res) =>
      res.json().then((data) => {
        fetch(url + "group/join/" + data.data.id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
        });
      })
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className=" bg-stone-800 rounded-xl text-left px-8 py-6">
            <h1 className="text-lg font-medium text-stone-300">
              Create a new Group
            </h1>
            <div className="mt-4 flex flex-col gap-y-2 w-full">
              <input
                onChange={(e) => handleChange(e)}
                className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
                id="group_name"
                placeholder="Group Name"
              />
              <input
                onChange={(e) => handleChange(e)}
                className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-500"
                id="group_image"
                placeholder="Enter Image URL"
              />
            </div>
            <div className="mt-8 w-full flex justify-start items-center gap-x-4">
              <button
                onClick={() => handleCreate()}
                className="bg-sky-500 text-lg font-medium py-1 px-3.5 rounded-lg hover:bg-sky-700 duration-300"
              >
                Create Group
              </button>
              <button
                onClick={() => closeModal()}
                className="text-stone-400 text-lg font-medium py-1 px-3.5 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YourGroups;
