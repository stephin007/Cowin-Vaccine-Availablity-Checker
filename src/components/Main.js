import "./Main.css";

import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="test">
      <div className="test__home">
        <img
          src="https://user-images.githubusercontent.com/71087810/117496553-d5af7b00-af94-11eb-84bb-913a1f386811.png"
          alt=""
        />

        <Link
          style={{ textDecorationLine: "none", color: "black" }}
          to="/vaccines"
        >
          <h3 className="test__homeText">Vaccine Availability</h3>
        </Link>
      </div>
    </div>
  );
};

export default Test;
