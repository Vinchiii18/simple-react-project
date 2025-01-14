import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { MainApp } from './styled'

import styled from 'styled-components';

function App() {

  const storageKeyName = 'count'
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);
  const [count, setCount] = useState(retrieveCountValue);
  const addCount = (count) => setCount(Number(count + 1));

  const obj1 = { 'name': 'Alvin'}

  const [firstName, lastName ] = ['Alvin', 'Pogi'];

  if (count > 10) {
    setCount(0)
  } else {
    useEffect(() => { 
      localStorage.setItem('count', count)
      localStorage.setItem('myData', JSON.stringify(obj1))
      console.log(JSON.parse(localStorage.getItem('myData')))

      }, [count])

      // console.log('firstName-->', firstName);
      // console.log('lastName-->', lastName);
  }

  return (
    <MainApp>
      Hello World!

      <button onClick={() => addCount(count)}>
        count is: {count}
      </button>

    </MainApp>
  )
}

export default App
