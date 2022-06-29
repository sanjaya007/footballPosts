import React from "react";
import "../../css/header.css";
import img from "../../images/football.png";

function Header() {
  return (
    <>
      <div className="head-container">
        <div className="head-box flex-css-row-sb">
          <div className="logo-box flex-css-row-start">
            <img src={img} alt="football" />
            <h1>Football</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
