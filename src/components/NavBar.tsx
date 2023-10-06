import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div className="navbar p-3">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden  md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
