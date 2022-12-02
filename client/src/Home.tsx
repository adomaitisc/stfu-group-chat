import YourGroups from "./YourGroups";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { getCurrentUser } from "./services/auth.service";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

import { url } from "./services/api";
import { GroupType } from "./App";
import authHeader from "./services/auth-header";

type MessageType = {
  id: number;
  message: string;
  name: string;
  created_at: string;
};

const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const user = getCurrentUser();
  const [selected, setSelected] = useState<GroupType>();
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [username, setUsername] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  const getUserName = () => {
    let name = "";
    fetch(url + "user", {
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => {
        name = data.data["0"].name;
      });
    return name;
  };

  const sendMessage = () => {
    if (currentMessage.length <= 0) alert("Message cannot be empty");

    fetch(url + "send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      body: JSON.stringify({
        group_id: selected!.id,
        message: currentMessage,
      }),
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
          for (let i = 0; i < data.data.length; i++) {
            setMessages((messages) => [...messages, data.data[i]]);
          }
        })
      );
    }
  }, [selected]);

  useEffect(() => {
    const pusher = new Pusher("0a10d66cc69aaa71bb7f", {
      cluster: "us2",
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (data: any) => {
      data.name = username;
      console.log(username);
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(() => {
    const getUserName = async () => {
      fetch(url + "user", {
        headers: authHeader(),
      })
        .then((res) => res.json())
        .then((data) => {
          setUsername(data.data["0"].name);
        });
    };
    getUserName();
  }, []);

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
          <div className="mt-4 bg-stone-900 h-full w-full rounded-3xl py-4">
            {messages?.map((message) => (
              <p className="text-stone-300 font-medium  flex gap-2 px-4">
                {message.name}:
                <span className="text-stone-400 font-light">
                  {message.message}
                </span>
              </p>
            ))}
          </div>
          <div className="w-full flex flex-row items-center gap-x-4">
            <input
              className="w-full rounded-xl py-2 px-6 font-light text-lg bg-stone-700 text-stone-200 outline-none placeholder:text-stone-400"
              placeholder="Type a Message"
              onChange={(e) => handleChange(e)}
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
