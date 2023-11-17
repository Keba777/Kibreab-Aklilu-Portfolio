import { Link, animateScroll as scroll } from "react-scroll";

const NavItems = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <li>
        <Link to="about" smooth={true} duration={500} onClick={scrollToTop}>
          About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} onClick={scrollToTop}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500} onClick={scrollToTop}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} onClick={scrollToTop}>
          Contact
        </Link>
      </li>
    </>
  );
};

export default NavItems;
