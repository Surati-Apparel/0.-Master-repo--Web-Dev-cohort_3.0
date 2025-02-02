import { useState, createContext, useContext } from 'react'
import './App.css'

const BulbContext = createContext();

function BulbProvidet({ children }) {
  const [bulbOn, setBulbOn] = useState(false);

  return(<>
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
     {children}
    </BulbContext.Provider>
  </>)  
}

function App() {
  

  return (
    <>
      <BulbProvidet>
        <Light /> 
      </BulbProvidet>
    </>
  )
}

function Light({bulbOn, setBulbOn}) {

  return(<>
    <BulbState />
    <ToggleBulbState />
  </>)
}

function BulbState() {
  const {bulbOn} = useContext(BulbContext);

  return(<div>
    {bulbOn ? "Bulb On": "Bulb Off"}
  </div>)
}

function ToggleBulbState() {
  const {setBulbOn} = useContext(BulbContext);

  function toggleBulb() {
    setBulbOn(val => !val);
  }

  return(<>
    <button onClick={toggleBulb}>Toggle Switch</button>
  </>)
}

export default App
