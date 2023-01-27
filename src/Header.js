import React from 'react'

const Header = () => {
  return (
      <header>
          <ul className='header--main'>
            <p>RESUME</p>
            <nav role="navigation" className='nav-bar'>
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
            <div className='hamburger-menu'>
              <div className='menu'></div>
              <div className='menu'></div>
              <div className='menu'></div>
            </div>
            </nav>
          </ul>
      </header>
  )
}

export default Header