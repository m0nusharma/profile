import React from "react";
import "./BigCard.css";
const BigCard = () => {
  return (
    <div className="cookieCard mt-4 w-100 rounded-2 ">
      <p className="cookieHeading m-0">Try Premium</p>
      <p className="cookieDescription m-0">Tap to view Spacific analystic</p>
      <button className="acceptButton rounded-2 btn btn-danger">Get Access</button>
    </div>
  );
};

export default BigCard;
