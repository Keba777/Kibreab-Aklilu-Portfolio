const About = () => {
  return (
    <div>
      <div className="flex justify-center my-6">
        <div className="stats shadow ">
          <div className="stat animate-pulse">
            <div className="stat-value">1 +</div>
            <div className="stat-title">Years of Experience</div>
          </div>

          <div className="stat animate-pulse">
            <div className="stat-value">10 +</div>
            <div className="stat-title">Projects</div>
          </div>
        </div>
      </div>

      <div className="container mx-48 pl-10 py-10 ">
        <h2 className="text-3xl font-bold mb-8 ml-52">My Education</h2>
        <div className="relative">
          <div className="absolute top-0 bg-base-200 h-full w-1"></div>

          <div className="flex items-start">
            <div className=" -ml-1 z-10 mr-8">
              <div className="bg-green-700 h-4 w-4  rounded-full"></div>
            </div>
            <div className="w-2/3 mb-6">
              <div className="card w-full bg-base-200 shadow-xl ps-4">
                <div className="card-body">
                  <h2 className="card-title">
                    Electrical and Computer Engineering
                  </h2>
                  <p>Addis Ababa University</p>
                  <p>2020 - Present</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="-ml-1 z-10 mr-8">
              <div className="bg-green-700 h-4 w-4 rounded-full"></div>
            </div>
            <div className="w-2/3">
              <div className="card w-full bg-base-200 shadow-xl ps-4">
                <div className="card-body">
                  <h2 className="card-title">Software Engineering</h2>
                  <p>A2SV | Africa to Silicon Valley</p>
                  <p>2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
