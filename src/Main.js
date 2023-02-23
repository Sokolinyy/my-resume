import React from "react";
import Header from "./Header";

import { loremIpsum, LoremIpsum } from "react-lorem-ipsum";

import catImage from "./images/white-cat-lies-woman-s-knees.jpg";
import girl from "./images/work-example/girl.jpg";
import reactLogo from "./images/my-skills/React-icon.svg.png";
import cssHtmlJsLogo from "./images/my-skills/html-css-js-logo.png";
import gitHubLogo from "./images/logos/GitHub-Logo.png";

import donwloadLogo from "./images/icons/Download Light Icon_ffffff.png"

const Main = () => {
  function showHideOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay.style.display === "none") {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  }

  function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
  }

  return (
    <main
      role="main"
    >
      <Header showHideOverlay={showHideOverlay} />

      <div id="overlay" style={{ display: "none" }}>
        <nav>
          <a href="#about-section" onClick={hideOverlay}>
            <li>About</li>
          </a>
          <a href="#my-works-section" onClick={hideOverlay}>
            <li>My works</li>
          </a>
          <a href="#contact-section" onClick={hideOverlay}>
            <li>Contact</li>
          </a>
        </nav>
      </div>

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
        <article class="grid-container">
          <article className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <article className="middle">
              <h3 className="name-of-project">Name of project</h3>
              <a href="">
                <button className="link-to-site">URL</button>
              </a>
              <a href="" target="_blank">
                <button className="link-to-github">GitHub link</button>
              </a>
            </article>
            <div className="button-mobile">
              <button className="url-to-site-mobile" role="button">
                Link to site
              </button>
              <button className="url-to-github-mobile" role="button">
                Link to GitHub
                <img className="git-hub-logo" src={gitHubLogo}></img>
              </button>
            </div>
          </article>

          <article className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <article className="middle">
              <h3 className="name-of-project">Name of project</h3>
              <a href="">
                <button className="link-to-site">URL</button>
              </a>
              <a href="" target="_blank">
                <button className="link-to-github">GitHub link</button>
              </a>
            </article>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">
                Link to GitHub
                <img className="git-hub-logo" src={gitHubLogo}></img>
              </button>
            </div>
          </article>

          <article className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <article className="middle">
              <h3 className="name-of-project">Name of project</h3>
              <a href="">
                <button className="link-to-site">URL</button>
              </a>
              <a href="" target="_blank">
                <button className="link-to-github">GitHub link</button>
              </a>
            </article>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">
                Link to GitHub
                <img className="git-hub-logo" src={gitHubLogo}></img>
              </button>
            </div>
          </article>

          <article className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <article className="middle">
              <h3 className="name-of-project">Name of project</h3>
              <a href="">
                <button className="link-to-site">URL</button>
              </a>
              <a href="" target="_blank">
                <button className="link-to-github">GitHub link</button>
              </a>
            </article>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">
                Link to GitHub
                <img className="git-hub-logo" src={gitHubLogo}></img>
              </button>
            </div>
          </article>

          <article className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <article className="middle">
              <h3 className="name-of-project">Name of project</h3>
              <a href="">
                <button className="link-to-site">URL</button>
              </a>
              <a href="" target="_blank">
                <button className="link-to-github">GitHub link</button>
              </a>
            </article>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">
                Link to GitHub
                <img className="git-hub-logo" src={gitHubLogo}></img>
              </button>
            </div>
          </article>

          <article className="grid-item">
            <h3 className="project-name-mobile">Project name</h3>
            <img src={girl} className="grid-image"></img>
            <article className="middle">
              <h3 className="name-of-project">Name of project</h3>
              <a href="">
                <button className="link-to-site">URL</button>
              </a>
              <a href="" target="_blank">
                <button className="link-to-github">GitHub link</button>
              </a>
            </article>
            <div className="button-mobile">
              <button className="url-to-site-mobile">Link to site</button>
              <button className="url-to-github-mobile">
                Link to GitHub
                <img className="git-hub-logo" src={gitHubLogo}></img>
              </button>
            </div>
          </article>
        </article>
      </section>

      <section className="contact" id="contact-section">
        <h2>Contact</h2>

        <article className="contact-part">
          <div className="contact-links-container">
            <ul>
              <li>
                <a href="">My Email</a>
              </li>
              <li>
                <a href="">My Linkedin</a>
              </li>
              <li>
                <a href="">My Telegram</a>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-me">GET IN TOUCH</h3>
            <form className="form" action="mailto:kostyk.vasilii@gmail.com" method="post" enctype="text/plain">
              <input type="text" id="name" name="user_name" placeholder="NAME"></input>
              <input type="email" id="email" name="email" placeholder="EMAIL"></input>
              <input type="text" id="message" name="message" placeholder="MESSAGE"></input>
              <button type="submit" value="Send Email" className="send-button">SEND</button>
            </form>
          </div>
        </article>
      </section>

      <section className="download-pdf-resume">
        <h2>Download my resume in PDF:</h2>

        <a href="">
          <img className="donwload-icon" src={donwloadLogo}></img>
        </a>
      </section>
    </main>
  );
};

export default Main;
