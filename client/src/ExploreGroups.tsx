const ExploreGroups = () => {
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
    <div className="mt-4 w-full grid-cols-3 grid gap-y-2 gap-x-1">
      {dummyData.map((group) => (
        <div
          key={group.id}
          className="w-full rounded-xl flex flex-row justify-start items-center hover:bg-zinc-900/60 duration-300 px-2 py-2"
        >
          <img
            src={group.group_image}
            alt="group image"
            className="w-16 h-16 rounded-lg"
          />
          <div className="flex flex-col justify-center items-start ml-4">
            <h1 className="text-base font-normal text-zinc-300 truncate">
              {group.name}
            </h1>
            <h1 className="text-base font-normal text-zinc-400">
              {group.members} Members
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreGroups;
