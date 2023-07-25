import React from "react";

const YourWelcome = ({title, caption}) => {
  return (
    <div className="mt-3">
  <h3 className="m-0">{title}</h3>
      <p className="m-0">{caption}</p>
    
    </div>
  );
};

export default YourWelcome;
