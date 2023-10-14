import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div className="navbar p-3">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Kibreab</a>
      </div>
      <ul className="menu menu-horizontal  flex space-x-6 navbar-center">
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
      <div className="navbar-end pe-6">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
