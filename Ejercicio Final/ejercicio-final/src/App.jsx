import { useState } from 'react'
import CardScientist from './components/CardScientist'
import { scientists } from './data/scientists'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Científicos Famosos</h1>
      <div className="card-container">
        {scientists.map((scientist, index) => (
          <CardScientist
            key={index}
            name={scientist.name}
            image={scientist.image}
            profession={scientist.profession}
            awards={scientist.awards}
            discoveries={scientist.discoveries}
          />
        ))}
      </div>
    </div>
  )
}

export default App
