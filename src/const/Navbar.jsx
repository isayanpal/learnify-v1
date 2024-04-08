import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Edos from "../assets/edos.png";
export default function Navbar() {
  return (
    <>
      <div className="home-root flex mt-3">
        <Link to="/" className="left-nav basis-1/4 pl-5 cursor-pointer">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="middle-nav basis-1/2 flex items-center justify-center ">
          <ul className="flex items-center  justify-center gap-10 font-semibold">
            <li className="cursor-pointer hover:text-[#0C359E]">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#0C359E]">
              <Link to="/topics">Topics of Interest</Link>
            </li>
            <li className="cursor-pointer hover:text-[#0C359E]">
              <Link to="/tutorials">Video Tutorials</Link>
            </li>
            <li className="cursor-pointer hover:text-[#0C359E]">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/edos"
          className="right-nav cursor-pointer basis-1/4 flex items-center justify-end"
        >
          <img src={Edos} alt="edos" />
        </Link>
      </div>
    </>
  );
}
