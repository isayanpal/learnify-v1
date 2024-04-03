import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box";

const TutorialsPage = () => {
  return (
    <div className="m-[5rem]">
      <Link to="/topics">
        <div className="flex flex-row gap-[5px] items-center">
          <box-icon name="chevron-left"></box-icon>Back to topics
        </div>
      </Link>
      <div className="flex flex-col gap-[3rem] items-center mt-5">
        <div className="flex flex-row gap-[3rem] items-center">
          <Link
            to="https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&si=PdUOC3MZ1VxYwUno"
            target="_blank"
          >
            <Box title={"Software Engineering"} />
          </Link>
          <Link
            to="https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=_Hq-T8r3oBgFuWtK"
            target="_blank"
          >
            <Box title={"Operating System"} />
          </Link>
        </div>
        {/* <div className="flex flex-row gap-[3rem] items-center">
          <Box title={"Computer Networks"} />
          <Box title={"Compiler Design"} />
        </div> */}
        <div className="flex flex-row gap-[3rem] items-center">
          <Link
            to="https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=PRUHfO_Idl1_MJ9s"
            target="_blank"
          >
            <Box title={"Javascript"} />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=LDB4uaJ87e0"
            target="_blank"
          >
            <Box title={"React JS"} />
          </Link>
        </div>
        <div className="flex flex-row gap-[3rem] items-center">
          <Link
            to="https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&si=HZUGl8SnARDlcEfl"
            target="_blank"
          >
            <Box title={"Mongo DB"} />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=ENrzD9HAZK4"
            target="_blank"
          >
            <Box title={"Node JS"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
