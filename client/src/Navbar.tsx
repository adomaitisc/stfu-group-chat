import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-1/2 max-w-[512px] flex flex-row justify-between px-8 items-center text-xl bg-stone-800 text-white font-medium mt-8 py-2 rounded-full">
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
        to="/profile"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
