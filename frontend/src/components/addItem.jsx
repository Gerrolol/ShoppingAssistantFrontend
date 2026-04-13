import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

function AddItem() {
  const [input, setInput] = useState('')
  const [wooliesItems, setWooliesItems] = useState([])
  const [colesItems, setColesItems] = useState([])
  const [selectedWoolies, setSelectedWoolies] = useState(null)
  const [selectedColes, setSelectedColes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSearch = async () => {
    if (!input) return
    setLoading(true)
    setError(null)
    setSelectedWoolies(null)
    setSelectedColes(null)

    try {
      const [wooliesRes, colesRes] = await Promise.all([
        fetch(`https://shoppingassistantbackend2.onrender.com/api/woolies/get/List?item=${input}`),
        fetch(`https://shoppingassistantbackend2.onrender.com/api/coles/get/List?item=${input}`)
      ])
      setWooliesItems(await wooliesRes.json())
      setColesItems(await colesRes.json())
    } catch (err) {
      setError('Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = async () => {
    if (!selectedWoolies && !selectedColes) {
      setError('Please select at least one item')
      return
    }
    try {
      if (selectedWoolies) {
        await fetch('https://shoppingassistantbackend2.onrender.com/api/woolies/convert/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            product_name: selectedWoolies.product_name,
            current_price: selectedWoolies.current_price
          })
        })
      }
      if (selectedColes) {
        await fetch('https://shoppingassistantbackend2.onrender.com/api/coles/convert/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            product_name: selectedColes.product_name,
            current_price: selectedColes.current_price
          })
        })
      }
      setSuccess(true)
      setInput('')
      setWooliesItems([])
      setColesItems([])
      setSelectedWoolies(null)
      setSelectedColes(null)
    } catch (err) {
      setError('Failed to add items')
    }
  }

  return (
    <div className="page">
      <h1 className="title">Add Item</h1>

      {/* Search Bar */}
      {/* Search Bar + Button */}
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <div className="search-container">
        <FiSearch className="search-icon" />
        <input
        type="text"
        placeholder="Search for a product..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
    </div>
    <button className="search-btn" onClick={handleSearch}>
        {loading ? 'Searching...' : 'Search'}
    </button>
    </div>

      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">Items added successfully!</p>}

      {/* Side by side results */}
      {(wooliesItems.length > 0 || colesItems.length > 0) && (
        <>
          <div className="store-columns">

            {/* Woolies Column */}
            <div className="store-column">
              <div className="store-header woolies-header">
                <span className="store-dot woolies-dot" />
                Woolworths
              </div>
              {wooliesItems.map((item, index) => (
                <div
                  key={index}
                  className={`item-card ${selectedWoolies === item ? 'selected-woolies' : ''}`}
                  onClick={() => setSelectedWoolies(selectedWoolies === item ? null : item)}
                >
                  <p className="item-name">{item.product_name}</p>
                  <p className="item-price">${item.current_price}</p>
                </div>
              ))}
            </div>

            {/* Coles Column */}
            <div className="store-column">
              <div className="store-header coles-header">
                <span className="store-dot coles-dot" />
                Coles
              </div>
              {colesItems.map((item, index) => (
                <div
                  key={index}
                  className={`item-card ${selectedColes === item ? 'selected-coles' : ''}`}
                  onClick={() => setSelectedColes(selectedColes === item ? null : item)}
                >
                  <p className="item-name">{item.product_name}</p>
                  <p className="item-price">${item.current_price}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Selected summary + Save button */}
          {(selectedWoolies || selectedColes) && (
            <div className="selected-summary">
              <h3 className="summary-title">Selected Items</h3>
              {selectedWoolies && (
                <p className="summary-item">
                  <span className="summary-store woolies-text">Woolworths:</span>
                  {selectedWoolies.product_name} — ${selectedWoolies.current_price}
                </p>
              )}
              {selectedColes && (
                <p className="summary-item">
                  <span className="summary-store coles-text">Coles:</span>
                  {selectedColes.product_name} — ${selectedColes.current_price}
                </p>
              )}
              <button className="save-btn" onClick={handleAdd}>
                Save Items
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default AddItem