import React from "react";
import Button from 'react-bootstrap/Button';
import arprogears from "../assets/portfolio/arprogears.jpg";
import pi from "../assets/portfolio/Pi.jpeg";
import whatsapp from "../assets/portfolio/Whatsapp.jpeg";
import netflix from "../assets/portfolio/netflix.jpeg";
import todo from "../assets/portfolio/todo.jpeg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arprogears,
      tag: "E-Commerce Website using Django",
      href:"https://github.com/soorajar0002/ARPROGEARS_ECOM.git"
    },
    {
      id: 2,
      src: whatsapp,
      tag: "WhatsApp Clone done using HTML & CSS",
      href:"https://github.com/soorajar0002/whatsapp-clone.git"
    },
    {
      id: 3,
      src: pi,
      tag: "Pi Network Clone using HTML,CSS,Bootstrap & Javascript.",
      href:"https://github.com/soorajar0002/pi-network.git"
    },
    {
      id: 4,
      src: netflix,
      tag: "Netflix Clone using React JS",
      href:"https://github.com/soorajar0002/netflix_react_clone.git"
    },
    {
      id: 5,
      src: todo,
      tag: "Todo List using React JS.",
      href:"https://github.com/soorajar0002/pi-network.git"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className=" w-full text-white h-screen mt-96 pb-36"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-96">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mx-5">
            Portfolio
          </p>
          <p className="py-6 mx-5">Check out some of my work right here</p>
        </div>

        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0 ">
          {portfolios.map(({ id, src, tag, href }) => (
            <div key={id} className="shadow-md pb-5 shadow-gray-600 rounded-lg text-center ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="">
              <a className="btn" href={href}>
                <p className="text-center mt-2 text-xl">{tag}</p>
                </a>

                
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
