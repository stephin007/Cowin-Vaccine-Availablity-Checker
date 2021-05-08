import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
          <h3>Contribute</h3>
          <h3>About</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
