import { useState } from 'react'
import { FiSearch } from "react-icons/fi"

function Search() {
  const [results, setResults] = useState(null)
  const [input, setInput] = useState('')

  const itemsArray = input
    .split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0)

  async function handleClick() {
    const response = await fetch('https://shoppingassistantbackend2.onrender.com/search/cheapest/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: itemsArray })
    })
    const data = await response.json()
    setResults(data)
  }

  return (
    <div className="page">

      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for products (e.g. milk, bread, eggs)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="search-btn" onClick={handleClick}>
          Search
        </button>
      </div>

      {results && (
        <div className="result-card">

          <div className="result-header">
            <div>
              <p className="result-label">cheapest store</p>
              <p className="result-store">{results.store}</p>
            </div>
            <span className="best-price-badge">best price</span>
          </div>

          <div className="result-metrics">
            <div className="metric-card">
              <p className="metric-label">total price</p>
              <p className="metric-value">${results.totalPrice.toFixed(2)}</p>
            </div>
            <div className="metric-card savings">
              <p className="metric-label">you save</p>
              <p className="metric-value">${results.moneySaved.toFixed(2)}</p>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default Search