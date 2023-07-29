import React from "react";
import "./SideNav.css";
import MyImage from "../../assets/monu.jpg";
import NavButton from "../../Components/NavButtons/NavButton";

const SideNav = () => {
  return (
    <div className="viewheight p-4  text-center sidenav">
      <h3 className="fw-2 text-center">
        {" "}
        <a href="/" className="link-underline-light text-dark">
          NeeedSkill
        </a>{" "}
      </h3>

      <div className="d-flex justify-content-center">
        <img src={MyImage} alt="" className="ImgCurcle mt-5" />
      </div>
      <h5 className="m-0 pt-2"> Monu Sharma</h5>
      <p className="mail m-0"> sharmamonu42969@gmail.com</p>
      <div>
        <br />
        <NavButton title="About" iconn="fa-solid fa-house fs-6" /> <br />
        <NavButton
          title="Analystic "
          iconn="fa-solid fa-magnifying-glass-chart"
        />
        <br />
        <NavButton title="Task List" iconn="fa-solid fa-clipboard-list" />
        <br />
        <NavButton title="Tracking" iconn="fa-solid fa-truck-monster" />
        <br />
        <NavButton title="Setting" iconn="fa-solid fa-gear" />
        <br />
        <NavButton title="LogOut" iconn="fa-solid fa-right-from-bracket" />
      </div>
    </div>
  );
};

export default SideNav;
