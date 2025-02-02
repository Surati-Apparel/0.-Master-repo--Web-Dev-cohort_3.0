import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PostComponent />
    </>
  )
}

const style = {
  width: 400,
  backgroundColor: "white",
  borderRadius: 10,
  backgroundColor: "gray"
}

function PostComponent() {
  return (<>
    <div style={style}>
      <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={ {width:"auto", height:40, borderRadius:"50%" } } />
    </div>

    <div> Want to know how to win big> check out how these folks are won $6000 in bounty </div>
  </>)
}

export default App
