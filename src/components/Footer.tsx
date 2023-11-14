import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200">
      <aside>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-6">
          {/* Use regular anchor tags for external links */}
          <a
            href="https://github.com/Keba777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kibreab-aklilu-40011a256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin color="#0077B5" className="h-5 w-5" />
          </a>
          <a href="tel:+251937192396">
            <BsFillTelephoneFill color="#3DDC84" className="h-5 w-5" />
          </a>
          <a
            href="mailto:Akkeba37@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail color="#DB4437" className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
