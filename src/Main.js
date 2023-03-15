import React from "react";
import Header from "./Header";
import Typed from "react-typed";

import { loremIpsum, LoremIpsum } from "react-lorem-ipsum";

import tvSearch from "./images/work-example/tvSearch.png";
import multiStepForm from "./images/work-example/multi-step-form.png";
import dualsense from "./images/work-example/dualsense.png";

import githubIcon from "./images/icons/github-svgrepo-com.svg";
import liveIcon from "./images/icons/live-svgrepo-com.svg";
import emailIcon from "./images/icons/email-svgrepo-com .svg";
import linkedinIcon from "./images/icons/linkedin-svgrepo-com.svg";

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
    <main role="main">
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
          <a
            href="https://docs.google.com/document/d/1FAsXj0S9koXOmwr8Zl0Lybm3wv8tqQxBtvexXS_-27M/edit?usp=sharing"
            target="_blank"
            onClick={hideOverlay}
          >
            <li>Resume in PDF</li>
          </a>
        </nav>
      </div>

      <section className="greeting">
        <div className="greeting--text">
          <Typed
            strings={[`Hello, my name is Vasyl`]}
            style={{ color: "rgb(0, 138, 60)" }}
            typeSpeed={43}
          />
          <br />
          <Typed
            strings={["I am"]}
            typeSpeed={100}
            startDelay={1700}
            style={{
              color: "rgb(26, 177, 54)",
            }}
          />
          <br />
          <Typed
            strings={["Front-end Developer"]}
            typeSpeed={33}
            startDelay={2700}
            style={{
              color: "rgb(152, 255, 171)",
            }}
          />
          <br />
          {/* Hello, <br /> my <br /> name <br /> is <br /> Vasilii */}
        </div>
      </section>

      <section className="about-section" id="about-section">
        <h2 className="about-me">About Me</h2>
        <p>
          Hi, my name is Vasyl, 23-years old self-taught front-end developer
          from Ukraine who is live in Prague.
          <br />
          <br />
          I am love building both: visually appealing and functional web
          applications using HTML, CSS, JavaScript, and React.
          <br />
          <br />
          I am a quick learner and patient in taking step-by-step approaches to
          achieving my goals in the IT industry.
          <br />
          <br />
          Through the use of various online resources, I have developed a strong
          understanding of HTML/CSS, also I have a good understanding of React,
          and JavaScript. Recently start learning TypeScript
          <br />
          <br />
          Although I am new to the IT industry, I am eager to continue improving
          my skills as a front-end developer. I am a person who is always
          seeking new challenges and opportunities to learn. If you're looking
          for a passionate and hard-worker front-end developer to join your team
          in Prague, please feel free to connect with me.
          <br />
          <br />I am confident that I can make valuable contributions to any
          project and team.
        </p>
      </section>

      <section className="my-works" id="my-works-section">
        <h2>My Works: </h2>
        <article class="grid-container">
          <article className="work-item">
            <div className="project">
              <img src={dualsense} className="grid-image"></img>
              <article className="middle">
                <a href="">
                  <button className="link-to-site">URL</button>
                </a>
                <a href="" target="_blank">
                  <button className="link-to-github">GitHub link</button>
                </a>
              </article>
              <div className="project-description">
                <h2>PLAYSTATION PRODUCT</h2>
                <p>
                  Beautiful looking web-site with nice animations, not
                  particularly functional, but beautiful!
                </p>
                <div className="project-button">
                  <a href="https://sokolinyy.github.io/playstation-product/" target="_blank">
                    <button>
                      Live <img src={liveIcon} />
                    </button>
                  </a>
                  <a href="https://github.com/Sokolinyy/playstation-product" target="_blank">
                    <button>
                      GitHub Code <img src={githubIcon} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="work-item">
            <div className="project">
              <img src={multiStepForm} className="grid-image"></img>
              <div className="project-description">
                <h2>MULTI STEP FORM</h2>
                <p>
                  Subscription web-site, where you can choose yearly or monthly
                  plan, and it will render corresponding info
                </p>
                <div className="project-button">
                <a href="https://sokolinyy.github.io/multi-step-form/" target="_blank">
                    <button>
                      Live <img src={liveIcon} />
                    </button>
                </a>
                <a href="https://github.com/Sokolinyy/multi-step-form" target="_blank">
                    <button>
                      GitHub Code <img src={githubIcon} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="work-item">
            <div className="project">
              <img src={tvSearch} className="grid-image"></img>
              <div className="project-description">
                <h2>TV SEARCH</h2>
                <p>
                  Site, where you can search for TV shows, see how many seasons,
                  episodes, release date, rating every series.
                </p>
                <div className="project-button">
                  <a href="https://tranquil-vacherin-7a7d60.netlify.app" target="_blank">
                    <button>
                      Live <img src={linkedinIcon} />
                    </button>
                  </a>
                  <a href="https://github.com/Sokolinyy/search-show" target="_blank">
                    <button>
                      GitHub Code <img src={githubIcon} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </article>
      </section>

      <section className="contact" id="contact-section">
        <h2 className="stop">STOP</h2>
        <img
          className="gifNeo"
          src="https://media.tenor.com/QuOY5L0Xq_oAAAAC/neo-matrix.gif"
        ></img>
        <h2>CONTACT ME | HIRE ME</h2>

        <article className="contact-part">
          <div className="contact-links-container">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/vasyl-kostyk/" target="_blank">
                  Linkedin <img src={linkedinIcon}></img>
                </a>
                <a href="https://www.linkedin.com/in/vasyl-kostyk/" target="_blank">
                  GitHub <img src={githubIcon}></img>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-me">GET IN TOUCH</h3>
            <form
              className="form"
              action="mailto:kostyk.vasilii@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="NAME"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
              ></input>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="MESSAGE"
              ></input>
              <button type="submit" value="Send Email" className="send-button">
                SEND
              </button>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
