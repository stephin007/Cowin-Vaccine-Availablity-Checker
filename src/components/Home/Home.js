import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <h2>Vaccine Availablity</h2>
      </div>

      <div className="home__options">
        <div className="home__optionsTop">
          <h4>Select State</h4>
          <h4>Select District</h4>
          <h4>Pincode</h4>
          <h4>Date </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
