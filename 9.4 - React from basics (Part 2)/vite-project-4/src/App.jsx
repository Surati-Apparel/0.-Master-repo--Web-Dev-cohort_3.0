import './App.css'

function App() {
  
  return (
    <>
    <div className="cards">
     <Card>
     hi there
     </Card>

     <Card> 
        <div style={{color:"green",}}>
          Hi There <br /><br />
          <input type="text"></input>
        </div>
    </Card>
    </div>
    </>
  )
}

export default App

function Card({ children }) {


  return(<>
    <div className="card-container">
      { children }
    </div>
  </>)
}
