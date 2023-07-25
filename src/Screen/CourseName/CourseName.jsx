import React from "react";
import "./CourseName.css";

const CourseName = ({title, caption, time, by, persent, ImageOne }) => {
  return (
    <div className="mt-3 row ">
      <div className=" col-sm-12 col-md-4 d-flex gap-3 align-items-center">
        <img src={ImageOne} className="imageSize"></img>
        <div className=" d-flex align-items-center">
          <div className="">
            <h6 className="m-0"> {title}</h6>
            <p className="m-0">{caption}</p>
          </div>
        </div>
      </div>
      <div className=" col-sm-12 col-md-4 d-flex gap-2 align-items-center justify-content-center">
        <i className="fa-solid fa-clock fs-4"></i>
        <p className=" m-0">{time}</p>
      </div>
      <div className=" col-sm-12 col-md-4 gap-2 d-flex align-items-center float-end p-0">
      <h6 className=" m-0"> {by}</h6>
      <div className="line">
      <div className="LineDark"></div>
      </div>
      <p className="m-0">{persent}</p>
      <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default CourseName;
