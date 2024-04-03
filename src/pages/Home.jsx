import React from "react";
import centerImg from "../assets/home-center.png";
import img1 from "../assets/1p.png";
import img2 from "../assets/2p.png";
import img3 from "../assets/3p.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="heading mt-10 leading-4 ">
        <div className="p-4 text-center ">
          <h1 className="text-4xl font-bold underline text-yellow-400">
            Free Education <span className="text-black">!</span>
          </h1>
          <p className="text-2xl my-2 font-semibold">
            Your all learning resources at one place
          </p>
          <p className="text-xl mb-4">
            We're a non-profit with the mission <br />
            to provide free learning resources for Engineering Students
          </p>
          <Link
            to="/topics"
            className="bg-yellow-300  rounded-[30px] hover:bg-[#39A377] hover:text-white  w-[10rem] h-[3rem] shadow-lg text-black font-bold py-2 px-4 "
          >
            Start learning
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img src={centerImg} alt="" />
      </div>

      <div className="points flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-20 mb-5">
        {/* //! this needs to be converted into divs */}
        <img src={img1} alt="" className="mb-4 lg:mb-0" />
        <img src={img2} alt="" className="hidden lg:block ml-20 mr-20" />
        <img src={img3} alt="" className="mb-4 lg:mb-0" />
      </div>
    </>
  );
}
