import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const storageKeyName = 'count'
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);
  const [count, setCount] = useState(retrieveCountValue);
  const addCount = (count) => setCount(Number(count + 1));

  const obj1 = { 'name': 'Alvin'}

  if (count > 10) {
    setCount(0)
  } else {
    useEffect(() => { 
      localStorage.setItem('count', count)
      localStorage.setItem('myData', JSON.stringify(obj1))
      console.log(JSON.parse(localStorage.getItem('myData')))

      }, [count])
  }

  return (
    <div className="App">
      Hello World! <br />

      <button onClick={() => addCount(count)}>
        count is: {count}
      </button>

    </div>
  )
}

export default App
