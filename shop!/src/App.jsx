import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Search from './components/Search'
import Searchbutton from './components/Search'
import './App.css'

function App() {
  return(
    <div>
      <h1>Where do I shop today??</h1>
      <h2>Compare prices across supermarkets and find the best deals</h2>
      <Search />
    </div>
  )
}

export default App
