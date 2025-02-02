import { useEffect, useState, useRef } from "react"
import { useFetchUrl } from '../hooks/useFetch'
import { usePrev } from '../hooks/usePrev'

function App() {
  let currentClock = useRef();

  function actualSearch() {
    console.log("Request received");
  }

  function debouncingSearch() {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(actualSearch, 5000);
  }

  return(<>
    <input type="text" onChange={debouncingSearch} name="text" id="search" />
  </>)
}

function useCounter() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(val => val+1);
  }

  return {
    count: count,
    increaseCount: increaseCount 
  }
}

function Counter() {
  const {count, increaseCount} = useCounter();

  return (
    <>
      <div>{count}</div>
      <button onClick={increaseCount}> Increase count </button>
    </>
  )
}

export default App
