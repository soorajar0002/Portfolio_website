import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import './Home.css'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-64 sm:mt-2">
          <h2 className="text-6xl sm:text-7xl font-bold text-white mt-20 mx-5 ">
            I'm Sooraj,
          </h2>
          <h1 className="text-white text-4xl mx-5">FULL STACK DEVELOPER</h1>
          <p className="text-gray-500 py-4 max-w-md mx-5">
          Experienced full stack Django developer proficient in Python, Django, HTML, Tailwind CSS, and React JS. 


          </p>

          <div className="mx-5">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mx-2 mt-5 ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-xl mx-auto  w-1/3 md:w-full image-size"
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default Home;
