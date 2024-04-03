import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box";

const DevelopmentPage = () => {
  return (
    <div className="m-[5rem]">
      <div className="flex flex-row justify-between items-center">
        <Link to="/topics">
          <div className="flex flex-row gap-[5px] items-center">
            <box-icon name="chevron-left"></box-icon>Back to topics
          </div>
        </Link>
        <Link to="/tutorials">
          <div className="flex flex-row gap-[5px] items-center">
            Tutorials
            <box-icon name="chevron-right"></box-icon>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-[3rem] items-center mt-5">
        <div className="flex flex-row gap-[3rem] items-center">
          <Link to="/topics/development/react">
            <Box title={"React JS"} />
          </Link>
          <Link to="/topics/development/js">
            <Box title={"Javascript"} />
          </Link>
        </div>
        <div className="flex flex-row gap-[3rem] items-center">
          <Link to="/topics/development/mongo">
            <Box title={"Mongo DB"} />
          </Link>
          <Link to="/topics/development/node">
            <Box title={"Node JS"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPage;
