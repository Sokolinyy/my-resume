import React from 'react'

const Header = () => {
  return (
      <header>
        <nav role="navigation">
        <ul className='header--main'>
          <p>RESUME</p>
          <nav role="navigation">
            <a 
              href='#about-section'>
                <li>About</li>
            </a>
            <a 
              href='#my-works-section'>
                <li>My works</li>
            </a>
            <a 
              href='#contact-section'>
                <li>Contact</li>
            </a>
            <a 
              href='#a-little-game'>
                <li>A little game</li>
            </a>
          </nav>
        </ul>
        </nav>
      </header>
  )
}

export default Header