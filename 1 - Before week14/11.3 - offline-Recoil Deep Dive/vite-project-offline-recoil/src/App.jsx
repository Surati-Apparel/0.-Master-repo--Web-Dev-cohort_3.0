import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState, atom, selector, atomFamily, useRecoilStateLoadable } from 'recoil'
import './App.css'
import { notificationsAtom, todoAtomFaimily } from './atoms'
import axios from 'axios';



function App() {

  return (<>
    <RecoilRoot> 
      <div style={{display:"flex", flexWrap:"wrap"}}>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={3} />
      <Todo id={4} />
    </div>
    </RecoilRoot> 
  </>)
  
}

function Todo({id}) {
  const [todoItem, setTodoItem] = useRecoilStateLoadable(todoAtomFaimily(id)); 
  console.log(todoItem)
  console.log("content", todoItem.content)

  async function nextTodoItem() {
      const nextId = todoItem.contents.id + 1; // Increment the ID
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${nextId}`);
      setTodoItem(response.data); // Update the state with the next todo item
  }

  if(todoItem.state === 'loading') {
    return(<>
      <div style={{background: '#fafafa', border: '1px solid #ccc', borderRadius: '4px', padding: 10, margin: 10, width: '20%', overflow:'clip' }}>Loading...</div>
    </>)
  } else if(todoItem.state === 'hasValue') {
    return(<>
      <div style={{background: '#fafafa', border: '1px solid #ccc', borderRadius: '4px', padding: 10, margin: 10, width: '20%', overflow:'clip' }}> 
        <pre>
          {JSON.stringify(todoItem.contents, null, 2)}
        </pre> 
  
        <button onClick={nextTodoItem}> Update </button>
      </div>
    </>)
  }

 
}

function Header() {
  const todoData = useRecoilValue(notificationsAtom);
  

  return (
    <>
      <button>Home</button>
      <button>My Network ({todoData?.id || 'Loading...'})</button>
      <button>Jobs ({todoData?.title || 'Loading...'})</button>
      <button>Messages ({todoData?.id || 'Loading...'})</button>
      <button>Notifications ({todoData?.id || 'Loading...'})</button>
      <button>Total count ({todoData?.id || 'Loading...'})</button>
    </>
  );
}



export default App


