import React from 'react'

import "./styles/desktop-styles.css"
import "./styles/tablet-styles.css"
import "./styles/mobile-styles.css"

import Header from './Header'
import Main from './Main'


const App = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

export default App