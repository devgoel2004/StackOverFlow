import React from "react";
import LeftSidebar from "../../components/LefftSidebar/LeftSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "../../App.css";
const Home = ({ slideIn, handleSlideIn }) => {
  return (
    <div>
      <div className="home-container-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        <div className="home-container-2">
          <HomeMainbar />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
