const YourGroups = () => {
  const dummyData = [
    {
      id: 1,
      name: "Mars Rover 2022",
      members: 10,
      group_image: "https://source.unsplash.com/random/?mars",
    },
    {
      id: 2,
      name: "Group 2",
      members: 20,
      group_image: "https://source.unsplash.com/random/?ocean",
    },
    {
      id: 3,
      name: "Group 3",
      members: 30,
      group_image: "https://source.unsplash.com/random/?nebula",
    },
    {
      id: 4,
      name: "Group 4",
      members: 40,
      group_image: "https://source.unsplash.com/random/?space",
    },
  ];

  return (
    <div className="mt-4 w-full flex flex-col gap-y-2">
      {dummyData.map((group) => (
        <div
          key={group.id}
          className="w-full rounded-xl flex flex-row justify-start items-center hover:bg-stone-900/60 duration-300 px-2 py-2"
        >
          <img
            src={group.group_image}
            alt="group image"
            className="w-12 h-12 rounded-lg"
          />
          <div className="flex flex-col justify-center items-start ml-3">
            <h1 className="text-sm font-normal text-stone-300 truncate">
              {group.name}
            </h1>
            <h1 className="text-sm font-normal text-stone-400">
              {group.members} Members
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourGroups;
