import React from "react";

const Header = (props) => {

  return (
    <header>
      <ul className="header--main">
        <p className="logo">PORTFOLIO</p>
        <nav role="navigation" className="nav-bar">
          <a href="#about-section">
            <li>About</li>
          </a>
          <a href="#my-works-section">
            <li>My works</li>
          </a>
          <a href="#contact-section">
            <li>Contact</li>
          </a>

          <div onClick={props.showHideOverlay} id="hamburger-menu">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
        </nav>
      </ul>
    </header>
  );
};

export default Header;
