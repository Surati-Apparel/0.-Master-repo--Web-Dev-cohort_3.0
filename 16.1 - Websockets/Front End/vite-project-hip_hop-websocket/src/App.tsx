import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [socket, setSocket] = useState();

  const inputRef = useRef();
  // const responseRef = useRef<HTMLInputElement>();

  useEffect(()=> {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    }

  }, [])

  function sendMessgae() {
    if(!socket) return;
    //@ts-ignore
    socket.send(inputRef.current.value);
  }

  return (
    <>
      <div>Hello There <span> </span></div> 

      <input ref={inputRef} type="text" placeholder='Enter word here' />
      <button onClick={sendMessgae}> Connect </button>    

       
    </>
  )
}

export default App
