import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__home">
        <div className="intro__homeRes">
          <img
            src="https://user-images.githubusercontent.com/71087810/117496553-d5af7b00-af94-11eb-84bb-913a1f386811.png"
            alt=""
            className="logo__img"
          />

          <Link
            style={{ textDecorationLine: "none", color: "black" }}
            to="/vaccines"
          >
            <h3 className="intro__homeText">Vaccine Availability</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
