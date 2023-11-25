import React from "react";
import LeftSidebar from "../../components/LefftSidebar/LeftSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

import "../../App.css";
const Question = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Question;
