import React from "react";
import topicImg from "../assets/topics.jpg";
import { Link } from "react-router-dom";
const TopicsPage = () => {
  return (
    <div className="flex flex-col justify-between items-center m-[2rem]">
      <div className="w-[500px] h-[500px]">
        <img src={topicImg} alt="" />
      </div>
      <h1 className="text-[#39A377] underline text-4xl font-bold">
        Choose Your Topic of Interest
      </h1>
      <div className="flex flex-row gap-[2rem] items-center mt-[2rem]">
        <Link
          to="/topics/core"
          className="w-[400px] h-[250px] justify-center items-center flex shadow-xl rounded-[30px] hover:shadow-[#39A377] cursor-pointer bg-gradient-to-br from-yellow-200 to-yellow-500"
        >
          <span className="text-3xl font-semibold">Core</span>
        </Link>
        <Link
          to="/topics/development"
          className="w-[400px] h-[250px] justify-center items-center flex shadow-xl rounded-[30px] hover:shadow-[#39A377] cursor-pointer bg-gradient-to-br from-yellow-200 to-yellow-500"
        >
          <span className="text-3xl font-semibold">Development</span>
        </Link>
      </div>
    </div>
  );
};

export default TopicsPage;
