import React from "react";
import "./CourseName.css";
import ImageOne from "../../assets/3d box.jpg";
import ImageTwo from "../../assets/graphic.jpg";
import Imagethree from "../../assets/images.jpg";

const CourseName = () => {
  return (
    <div className="mt-3 row">
    <div className=" col-sm-12 col-md-4 d-flex gap-3 align-items-center">
      <img src={ImageOne} className="imageSize"></img>
      <div className="">
        <h6 className="m-0"> UX Thinking</h6>
        <p> By Sushil Sharma</p>
        </div>
      </div>
      <div className=" col-sm-12 col-md-4 d-flex gap-2">
      <i class="fa-solid fa-clock"></i>
      <p>24h32m</p>
      </div>

      <div className=" col-sm-12 col-md-4 d-flex align-items-center">
    
      </div>

    </div>
  );
};

export default CourseName;
