import { useState } from "react";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="text-base text-red-600"
          >
            Delete now
          </button>
          <h1 className="text-xs text-stone-600">
            *this action cannot be undone
          </h1>
        </div>
        <div className="mt-8 w-fulll flex flex-col justify-start items-start">
          <h1 className="text-sm font-normal text-stone-600">
            Help us by following on GitHub
          </h1>
          <div className="w-full flex gap-x-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/adomaitisc"
              className="text-base text-sky-500"
            >
              adomaitiscaua
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/alonsofroelingnatwit"
              className="text-base text-sky-500"
            >
              nicolasalonso
            </a>
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

const DeleteModal = ({ isOpen, closeModal }: any) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className=" bg-stone-800 rounded-xl text-left px-8 py-6">
            <h1 className="text-lg font-medium text-stone-300">
              Are you sure you want to delete your account?
            </h1>
            <h1 className="text-sm font-light text-stone-500">
              You can always create a new account.
            </h1>
            <div className="mt-8 w-full flex justify-start items-center gap-x-4">
              <button className="bg-red-900 text-red-500 text-lg font-medium py-1 px-3.5 rounded-lg hover:bg-red-600 hover:text-red-300">
                Delete pls
              </button>
              <button
                onClick={() => {
                  closeModal();
                }}
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

export default Profile;
