import { useState } from "react";
import OffCanvas from "../Components/OffCanvas/OffCanvas";
import Card from "../Screen/Card/Card";
import Heading from "../Screen/Heading/Heading";
import Course from "../Screen/Courses/Course";
import CourseName from "../Screen/CourseName/CourseName";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="viewheight overflow-auto border w-100 ">
      <div className="row h-100">
        <div className="col-sm-12 col-md-8">
        <div className="row m-5 overflow-auto">
        <Heading/>
            <div className="col-sm-6 col-md-4 mb-2 ">
              <Card
                title="140+"
                caption="Total hours"
                BoxIcon="fa-solid fa-clock"
              />
            </div>
            <div className="col-sm-6 col-md-4 mb-2">
              <Card
                title="43"
                caption="Completed tasks"
                BoxIcon="fa-solid fa-clipboard-list"
              />
            </div>
            
            <div className="col-sm-6 col-md-4 mb-2">
              <Card
                title="450"
                caption="Total Points"
                BoxIcon="fa-solid fa-sun"
              />
            </div>
            <Course />
            <CourseName  />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 bg-primary "></div>
      </div>
    </div>
  );
};

export default Home;
