import "./Header.css";

import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="header__leftImg"
            src="https://user-images.githubusercontent.com/71087810/117496136-3d18fb00-af94-11eb-876a-d3acc96aaa75.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__rightNav">
        <div className="header__right">
          <h3><a href="https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker">Contribute</a></h3>
          <Link to="/about" style={{ textDecoration: "none", color: "black", fontSize: "19px" }}>
              <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
