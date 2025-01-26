 
import React, { useEffect, useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(1)
  
  useEffect(()=>{
    setInterval(()=>{
      setIsVisible(val => !val);
    }, 5000)
  }, []);


  return (
    <>
     {isVisible && <Counter count={count} setCount={setCount} />}
    </>
  )
} 



function Counter({count, setCount}) {
  useEffect(() => {
    //mount
    const clock = setInterval(() => {
      setCount(val => val+1);
    }, 1000)

    //unmount
    return function() {
      clearInterval(clock);
    }
  }, [])
 
 


  return(
  <>
    <h1> {count} </h1>
  </>
  )
}
export default App