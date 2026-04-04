import {useState} from 'react'

function Search(){

    const [results, setResults] = useState(null);
    const [input, setInput] = useState('') 

    async function handleClick(){
        const response = await fetch(`http://localhost:8080/search/cheapest?productName=${input}`)
        const data = await response.json()
        setResults(data)
    }
    
    return (
        <div>
            <input 
                type = "text" 
                placeholder="Search.."
                value={input}
                onChange = {e=> setInput(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
            <p>{JSON.stringify(results)}</p>
        </div>
        
    )
}

export default Search