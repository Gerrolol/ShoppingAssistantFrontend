import Search from './components/Search'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Anna's Smart Supermarket Finder</h1>
      <p className="subtitle">
        Don’t get smashed by prices — find the best avo deals 🥑
      </p>

      <Search />

      <div className="how-it-works">
        <h2 className= "subheading">How it works</h2>

        <div className="steps">
          <div className="step">
            <div className="icon">🔍</div>
            <h3>Search</h3>
            <p>Enter the product you're looking for</p>
          </div>

          <div className="step">
            <div className="icon">🏬</div>
            <h3>Filter</h3>
            <p>Select which stores to compare</p>
          </div>

          <div className="step">
            <div className="icon">💰</div>
            <h3>Save</h3>
            <p>Find the cheapest option instantly</p>
          </div>
        </div>
      </div>

    <div className="teddy-container">
      <svg viewBox="0 0 100 100" className="teddy">
        <circle cx="28" cy="28" r="14" fill="#c8a882"/>
        <circle cx="72" cy="28" r="14" fill="#c8a882"/>
        <circle cx="28" cy="28" r="8" fill="#e8c9a0"/>
        <circle cx="72" cy="28" r="8" fill="#e8c9a0"/>
        <circle cx="50" cy="50" r="28" fill="#c8a882"/>
        <ellipse cx="50" cy="60" rx="12" ry="8" fill="#e8c9a0"/>
        <ellipse cx="50" cy="56" rx="4" ry="3" fill="#7a5c3e"/>
        <path d="M44 62 Q50 67 56 62" fill="none" stroke="#7a5c3e" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="44" r="4" fill="#3d2b1a"/>
        <circle cx="60" cy="44" r="4" fill="#3d2b1a"/>
        <circle cx="41.5" cy="42.5" r="1.2" fill="white"/>
        <circle cx="61.5" cy="42.5" r="1.2" fill="white"/>
      </svg>
    </div>

    </div>
  )
}

export default App