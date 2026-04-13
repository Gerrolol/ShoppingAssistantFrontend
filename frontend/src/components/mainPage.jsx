import Search from './Search'

function mainPage() {
  return (
    <>
      <h1 className="title">Anna's Smart Supermarket Finder</h1>
      <p className="subtitle">
        Don't get smashed by prices — find the best avo deals 🥑
      </p>
      <Search />
      <div className="how-it-works">
        <h2 className="subheading">How it works</h2>
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
    </>
  )
}

export default mainPage;