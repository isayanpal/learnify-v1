import React from "react";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="flex flex-col gap-[2rem] items-center m-[3rem]">
      <div className="w-[500px] h-[500px]">
        <img src={contactImg} alt="" />
      </div>
      <div className="text-3xl font-bold text-center text-[#9652ED]">
        If you need any help regarding the subjects <br />
        or face any issue in the website -
      </div>
      <div className="flex flex-row justify-between items-center">
        <box-icon name="envelope"></box-icon>
        <span className="font-medium text-xl">Mail us at</span> -{" "}
        <span className="text-xl font-light">learnify@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
