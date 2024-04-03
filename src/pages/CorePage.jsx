import React from "react";
import "boxicons";
import Box from "../components/Box";
import { Link } from "react-router-dom";

const CorePage = () => {
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
          <Link to="/topics/core/software">
            <Box title={"Software Engineering"} />
          </Link>
          <Link to="/topics/core/os">
            <Box title={"Operating System"} />
          </Link>
        </div>
        {/* <div className="flex flex-row gap-[3rem] items-center">
          <Box title={"Computer Networks"} />
          <Box title={"Compiler Design"} />
        </div> */}
      </div>
    </div>
  );
};

export default CorePage;
