import { animateScroll as scroll } from "react-scroll";
import ColorModeSwitch from "./ColorModeSwitch";
import NavItems from "./NavItems";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar p-3">
      <div className="hidden md:flex navbar-start">
        <a onClick={scrollToTop} className="btn btn-ghost normal-case text-xl">
          Home
        </a>
      </div>

      <div className="dropdown navbar-start">
        <label tabIndex={0} className="btn btn-ghost btn-square md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box "
        >
          <NavItems />
        </ul>
      </div>

      <ul className="menu hidden md:menu-horizontal md:space-x-3 lg:space-x-6 navbar-center">
        <NavItems />
      </ul>

      <div className="navbar-end pe-6">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
