import React from "react";

const Box = ({ title }) => {
  return (
    <div className="font-semibold text-3xl text-[#39A377] flex justify-center items-center w-[400px] h-[250px] rounded-[30px] shadow-xl hover:shadow-[#FCDC2A] hover:scale-105 transition-transformduration-300 cursor-pointer">
      {title}
    </div>
  );
};

export default Box;
