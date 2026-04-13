import { useState } from 'react'
import MainPage from './mainPage'
import AddItem from './AddItem'

function pageSwitcher() {
  const [showAddItem, setShowAddItem] = useState(false)

  return (
    <div>
      <button 
        className="switchPage"
        onClick={() => setShowAddItem(!showAddItem)}
      >
        {showAddItem ? "Back to Main" : "Add Item"}
      </button>

      {showAddItem ? <AddItem /> : <MainPage />}
    </div>
  )
}

export default pageSwitcher