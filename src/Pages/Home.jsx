import { useState } from "react";
import OffCanvas from "../Components/OffCanvas/OffCanvas";
import Card from "../Screen/Card/Card";
import Heading from "../Screen/Heading/Heading";
import Course from "../Screen/Courses/Course";
import CourseName from "../Screen/CourseName/CourseName";
import ImageOne from "../assets/3d box.jpg";
import ImageTwo from "../assets/ui.jpg";
import ImageThree from "../assets/images.jpg";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import JavaScript from "../assets/javascript.png";
import Reactjs from "../assets/reactjs.jpg";
import nextjs from "../assets/nextjs.jpg";
import bootstrap from "../assets/bootstrap-logo.png";
import YourWelcome from "../Screen/YourWelcome/YourWelcome";
import Goal from "../Screen/Goal/Goal";
import DotedCard from "../Components/DotedCard/DotedCard";
import BlackBTN from "../Components/BlackBTN/BlackBTN";
import BigCard from "../Components/BigCard/BigCard";
import SideNav from "../Screen/SideNav/SideNav";
import './Home.css'

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="viewheight overflow-auto border w-100 ">
      <div className="row h-100">
        <div className="col-sm-12 col-md-8">
          <div className="row m-5 overflow-auto">
          <div className="d-flex justify-content-between align-items-center  ">
          <OffCanvas  show={show} handleclose={handleClose} monuPlacement='start'>
          <SideNav />
          </OffCanvas>
          <Heading />
          <i className="fa-solid fa-bars MiniSideNav fs-4 " onClick={handleShow}> </i>
          </div>
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
            <div className="">
              <CourseName
                title="UI DESIGNING"
                caption="by  Sushil Sharma"
                time="23h32m"
                by="6/8"
                persent="65%"
                ImageOne={ImageOne}
              />
              <CourseName
                title="Principal of UX design"
                caption="by  Sushil Sharma"
                time="04h30m"
                by="2/3"
                persent="70%"
                ImageOne={ImageTwo}
              />
              <CourseName
                title="HTML"
                caption="by  Sushil Sharma"
                time="05h04m"
                by="3/4"
                persent="90%"
                ImageOne={html}
              />
              <CourseName
                title="CSS"
                caption="by  Sushil Sharma"
                time="15h50m"
                by="9/2"
                persent="70%"
                ImageOne={css}
              />
              <CourseName
                title="BOOTSTRAP"
                caption="by  Sushil Sharma"
                time="09h40m"
                by="8/7"
                persent="60%"
                ImageOne={bootstrap}
              />
              <CourseName
                title="JAVASCRIPT"
                caption="by  Sushil Sharma"
                time="07h60m"
                by="7/4"
                persent="10%"
                ImageOne={JavaScript}
              />
              <CourseName
                title="REACT JS"
                caption="by  Sushil Sharma"
                time="12h40m"
                by="6/3"
                persent="40%"
                ImageOne={Reactjs}
              />
              <CourseName
                title="NEXT JS"
                caption="by  Sushil Sharma"
                time="08h40m"
                by="7/6"
                persent="30%"
                ImageOne={nextjs}
              />
              <CourseName
                title="Bland Your Logic"
                caption="by  Sushil Sharma"
                time="05h40m"
                by="8/9"
                persent="60%"
                ImageOne={ImageThree}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 bg-light">
          <div className="m-4">
            <YourWelcome title="Welcome back, Monu!" caption="Web Designer" />
            <Goal />
            <DotedCard head="week 01" title="Learn HTML" time="02Jul-09Jul" />
            <DotedCard
              head="week 02"
              title="Completed tests"
              time="10Jul-11Jul"
            />
            <DotedCard head="week 03" title="Learn CSS" time="12Jul-30Jul" />
          
            <YourWelcome
              title="Career Goals"
              caption="Get custom skill and courses  recomendation based on your goals."
            />
            <BlackBTN />
            <BigCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;