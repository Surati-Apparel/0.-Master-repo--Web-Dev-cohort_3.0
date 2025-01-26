import { useState } from 'react'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'

function App() {

  return(<RecoilRoot>
    <Buttons />
    <Counter />
    <IsEven />
    <Counter />
  </RecoilRoot>)
}


function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increse() {
    setCount(val => val+2);
  }
  
  function decrese() {
    setCount(val => val-1);
  }

  return(<>
    <button onClick={increse}>Increse</button>
    <button onClick={decrese}>Decrese</button>
  </>)
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return(<>
    <div>
      {count}
    </div>
  </>)
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return(<>
    <div>
      {even}
    </div>
  </>)
}

export default App
