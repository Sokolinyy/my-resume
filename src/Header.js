import React from "react";
import downloadIcon from "./images/icons/download-file-svgrepo-com.svg"

const Header = (props) => {

  return (
    <header>
      <ul className="header--main">
      <a className="logo-url"
            href="https://docs.google.com/document/d/1FAsXj0S9koXOmwr8Zl0Lybm3wv8tqQxBtvexXS_-27M/edit?usp=sharing"
            target="_blank"
          >
            <p className="logo">PORTFOLIO</p>
          </a>
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
          <a href="https://docs.google.com/document/d/1FAsXj0S9koXOmwr8Zl0Lybm3wv8tqQxBtvexXS_-27M/edit?usp=sharing" target="_blank">
            <li>
              <img style={{width: "40px", height: "40px"}} src={downloadIcon}></img>
            </li>
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
