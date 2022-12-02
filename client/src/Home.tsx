import YourGroups from "./YourGroups";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { getCurrentUser } from "./services/auth.service";
import React, { useEffect, useState } from "react";

import { url } from "./services/api";
import { GroupType } from "./App";
import authHeader from "./services/auth-header";

const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const user = getCurrentUser();
  const [selected, setSelected] = useState<GroupType>();
  const [messages, setMessages] = useState("");

  const sendMessage = () => {
    fetch(url + "send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      body: JSON.stringify({
        group_id: selected?.id,
        message: messages,
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  };

  useEffect(() => {
    if (user === undefined) {
      navigate("/join");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (selected) {
      fetch(url + "get-message/" + selected.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeader(),
        },
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
        })
      );
    }
  }, [selected]);

  return (
    <div className="w-full h-full flex flex-row items-start justify-start">
      <div className="w-1/3 h-full flex flex-col items-start justify-start">
        <h1 className="text-xl ml-4">Your Groups</h1>
        <YourGroups setSelected={(group: GroupType) => setSelected(group)} />
      </div>
      {/* This is the chat */}
      {selected ? (
        <div className="ml-4 w-2/3 h-full flex flex-col items-start justify-start gap-y-2">
          <div className="px-4 w-full flex justify-between items-center">
            <h1 className="text-xl">{selected.group_name}</h1>
            <h1 className="text-lg font-normal text-stone-400">
              {selected.member_count} Members
            </h1>
          </div>
          <div className="mt-4 bg-stone-900 h-full w-full rounded-3xl"></div>
          <div className="w-full flex flex-row items-center gap-x-4">
            <input
              className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-400"
              placeholder="Type a Message"
            />
            <button
              onClick={() => sendMessage()}
              className="px-4 bg-sky-500 py-2 rounded-xl text-lg"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="w-2/3 h-full flex flex-col items-center justify-center">
          <h1 className="text-xl">Select a group to chat</h1>
        </div>
      )}
      {/* 
      <div className="ml-4 w-2/3 h-full flex flex-col items-start justify-start">
        <div className="px-4 w-full flex justify-between items-center">
          <h1 className="text-xl">STFU Chat</h1>
          <h1 className="text-lg font-normal text-stone-400">21 Members</h1>
        </div>
        <div className="mt-4 bg-stone-900 h-full w-full rounded-3xl"></div>
        <input
          className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-400"
          placeholder="Type a Message"
        />
      </div> */}
    </div>
  );
};

export default Home;
