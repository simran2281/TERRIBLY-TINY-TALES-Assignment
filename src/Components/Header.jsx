import React from "react";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-picture">
        <img src={logo} alt="Logo" />
      </div>
      <header className="header-content">
        <h1>STORIES</h1>
        <button>
          <h2>Courses</h2>
        </button>
      </header>
    </div>
  );
};

export default Header;
