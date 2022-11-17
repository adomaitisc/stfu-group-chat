const Profile = () => {
  return (
    <div className="w-full">
      <h1 className="ml-4 text-xl">Your Account</h1>
      <div className="pl-4 w-full grid-cols-3 grid ">
        <div className="mt-8 w-fulll flex flex-col justify-start items-start">
          <h1 className="text-sm font-normal text-stone-600">Username</h1>
          <h1 className="text-base text-stone-300">@adomaitisic</h1>
        </div>
        <div className="mt-8 w-fulll flex flex-col justify-start items-start">
          <h1 className="text-sm font-normal text-stone-600">Email</h1>
          <h1 className="text-base text-stone-300">adomaitisc@wit.edu</h1>
        </div>
        <div className="mt-8 w-fulll flex flex-col justify-start items-start">
          <h1 className="text-sm font-normal text-stone-600">Join date</h1>
          <h1 className="text-base text-stone-300">November 17, 2022</h1>
        </div>
        <div className="mt-8 w-fulll flex flex-col justify-start items-start">
          <h1 className="text-sm font-normal text-stone-600">Delete account</h1>
          <h1 className="text-base text-red-600">Delete now</h1>
          <h1 className="text-xs text-stone-600">
            *this action cannot be undone
          </h1>
        </div>
        <div className="mt-8 w-fulll flex flex-col justify-start items-start">
          <h1 className="text-sm font-normal text-stone-600">
            Help us by following on GitHub
          </h1>
          <div className="w-full flex gap-x-4">
            <h1 className="text-base text-sky-500">adomaitisc</h1>
            <h1 className="text-base text-sky-500">nico_a_f</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
