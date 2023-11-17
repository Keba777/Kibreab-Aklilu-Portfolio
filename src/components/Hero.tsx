import Profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero min-h-screen bg-base-200  px-3 md:px-6 lg:px-28"
    >
      <div className="hero-content flex-col md:flex-row">
        <img
          src={Profile}
          alt="Profile Picture"
          className="max-w-xs rounded-lg shadow-2xl mr-6"
        />

        <div>
          <h2 className="text-center md:text-start text-4xl lg:text-5xl  font-bold mb-4">
            Kibreab Aklilu
          </h2>
          <h2 className="text-center md:text-start text-2xl lg:text-3xl  font-bold">
            "Full Stack Web Developer"
          </h2>
          <p className=" py-3 lg:py-6 text-justify">
            Hello! I'm a passionate Full Stack Web Developer, turning ideas into
            extraordinary web applications using React.js, Next.js, Node.js and
            other technologies. In the realm of coding, I craft seamless and
            unforgettable digital experiences. My expertise goes beyond
            functionality—I'm all about creating interfaces that leave a lasting
            impression.
          </p>
          <p className="text-justify mb-8 md:mb-0">
            My journey at A2SV has refined my skills and honed my ability to
            deliver high-quality web solutions. Let's innovate, create, and
            enhance the web, one line of code at a time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
