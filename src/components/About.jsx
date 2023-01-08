import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className="mb-6 sm:pb-2 mt-36 ">
          <p className="text-4xl   font-bold inline border-b-4 border-gray-500 mx-5 ">
            About
          </p>
        </div>

        <p className="text-xl sm:text-xl  mx-5 my-5">
        I am a self-taught Python Django developer with a passion for programming languages and the most recent technological advancements. I have used Python and Django to develop a completely functional e-commerce website and few other projects.
        </p>
        <p className="text-xl sm:text-xl  mx-5 my-2">
 Currently I'm working on a Job Portal website, using Django as backend and React as frontend. I'm searching for a challenging position at a reputable company so that I can advance and put my education, skills, and experience to work.
        </p>

        <br />

        <p className="text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;
