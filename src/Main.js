import React from 'react'
import catImage from "./images/white-cat-lies-woman-s-knees.jpg"
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
import girl from "./images/work-example/girl.jpg"
import faq from "./images/work-example/faq.jpg"
import card from "./images/work-example/card.jpg"
import rating from "./images/work-example/rating.jpg"
import remote from "./images/work-example/remote.jpg"
import suvs from "./images/work-example/suvs.jpg"
import htmlLogo from "./images/my-skills/html-logo.png"
import cssLogo from "./images/my-skills/css-3-logo-png-transparent.png"
import jsLogo from "./images/my-skills/JavaScript_logo_PNG2.png"
import reactLogo from "./images/my-skills/React-icon.svg.png"

const Main = () => {
  return (
    <main role="main">
      <section className='greeting'>
        <p className='greeting--text'>
          Hello, <br /> my <br /> name <br /> is <br /> Vasilii
        </p>

        <img 
          src={catImage}
          className='greeting--image'
        />
      </section>

      <div className='my-skills'>
          <img src={htmlLogo}></img>
          <img src={cssLogo}></img>
          <img src={jsLogo}></img>
          <img src={reactLogo}></img>
        </div>

      <section 
        className='about'
        id='about-section'
      >
        <h2 className='about-me'>About Me</h2>
        <p>
          <LoremIpsum p={1} />
        </p>
      </section>

      <section 
        className='my-works'
        id="my-works-section"
      >
  
        <h2>My Works</h2>
        <h3>Short name</h3>

        <div className='work-examples-container'>
          <ul>
            <li><p>Something about my work</p></li>
            <li>
              <a
                className="url-to-my-work"
                href='google.com'>GitHub link
              </a>
            </li>
          </ul>
            <img
              src={card}
              className='stock--image'
            />
        </div>

        <h3>Short name</h3>
        <div className='work-examples-container'>
          <ul>
            <li><p>Something about my work</p></li>
            <li>
              <a
                className="url-to-my-work"
                href='google.com'>GitHub link
              </a>
            </li>
          </ul>
            <img
              src={faq}
              className='stock--image'
            />
        </div>

        <h3>Short name</h3>
        <div className='work-examples-container'>
          <ul>
            <li><p>Something about my work</p></li>
            <li>
              <a
                className="url-to-my-work"
                href='google.com'>GitHub link
              </a>
            </li>
          </ul>
            <img
              src={girl}
              className='stock--image'
            />
        </div>

        <h3>Short name</h3>
        <div className='work-examples-container'>
          <ul>
            <li><p>Something about my work</p></li>
            <li>
              <a
                className="url-to-my-work"
                href='google.com'>GitHub link
              </a>
            </li>
          </ul>
            <img
              src={rating}
              className='stock--image'
            />
        </div>

        <h3>Short name</h3>
        <div className='work-examples-container'>
          <ul>
            <li><p>Something about my work</p></li>
            <li>
              <a
                className="url-to-my-work"
                href='google.com'>GitHub link
              </a>
            </li>
          </ul>
            <img
              src={remote}
              className='stock--image'
            />
        </div>

        <h3>Short name</h3>
        <div className='work-examples-container'>
          <ul>
            <li><p>Something about my work</p></li>
            <li>
              <a
                className="url-to-my-work"
                href='google.com'>GitHub link
              </a>
            </li>
          </ul>
            <img
              src={suvs}
              className='stock--image'
            />
        </div>
      </section>

      <section
        className='contact'
        id="contact-section"
      >

      </section>
    </main>
  )
}

export default Main