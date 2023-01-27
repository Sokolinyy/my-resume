import React from "react";
import catImage from "./images/white-cat-lies-woman-s-knees.jpg";
import { loremIpsum, LoremIpsum } from "react-lorem-ipsum";
import girl from "./images/work-example/girl.jpg";
import faq from "./images/work-example/faq.jpg";
import card from "./images/work-example/card.jpg";
import rating from "./images/work-example/rating.jpg";
import remote from "./images/work-example/remote.jpg";
import suvs from "./images/work-example/suvs.jpg";
import htmlLogo from "./images/my-skills/html-logo.png";
import cssLogo from "./images/my-skills/css-3-logo-png-transparent.png";
import jsLogo from "./images/my-skills/JavaScript_logo_PNG2.png";
import reactLogo from "./images/my-skills/React-icon.svg.png";
import cssHtmlJsLogo from "./images/my-skills/html-css-js-logo.png";
import gitHubLogo from "./images/logos/GitHub-Logo.png";

const Main = () => {
  return (
    <main role="main">
      <section className="greeting">
        <p className="greeting--text">
          Hello, <br /> my <br /> name <br /> is <br /> Vasilii
        </p>
        <img src={catImage} className="greeting--image" />
      </section>
      <div className="my-skills">
        <img src={cssHtmlJsLogo}></img>
        <img className="react-logo" src={reactLogo}></img>
      </div>
      <section className="about-section" id="about-section">
        <h2 className="about-me">About Me</h2>
        <p>
          <LoremIpsum p={1} />
        </p>
      </section>

      <section className="my-works" id="my-works-section">
        <h2>My Works: </h2>
        <div class="grid-container">
          <div className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <div className="middle">
              <h3 className="name-of-project">Name of project</h3>
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
            </div>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">Link to GitHub</button>
            </div>
          </div>

          <div className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <div className="middle">
              <h3 className="name-of-project">Name of project</h3>
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
            </div>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">Link to GitHub</button>
            </div>
          </div>

          <div className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <div className="middle">
              <h3 className="name-of-project">Name of project</h3>
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
            </div>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">Link to GitHub</button>
            </div>
          </div>

          <div className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <div className="middle">
              <h3 className="name-of-project">Name of project</h3>
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
            </div>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">Link to GitHub</button>
            </div>
          </div>

          <div className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <div className="middle">
              <h3 className="name-of-project">Name of project</h3>
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
            </div>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">Link to GitHub</button>
            </div>
          </div>

          <div className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <div className="middle">
              <h3 className="name-of-project">Name of project</h3>
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
            </div>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">Link to GitHub</button>
            </div>
          </div>

        </div>
      </section>

      <section className="contact" id="contact-section"></section>
    </main>
  );
};

export default Main;
