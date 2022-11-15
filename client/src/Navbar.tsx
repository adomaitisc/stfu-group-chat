import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-1/2 flex flex-row justify-evenly items-center bg-zinc-800 text-white font-bold mt-8 py-2 rounded-full">
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "rgb(161 161 170)",
              }
            : {}
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "rgb(161 161 170)",
              }
            : {}
        }
        to="/explore"
      >
        Explore
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "rgb(161 161 170)",
              }
            : {}
        }
        to="/profile"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
