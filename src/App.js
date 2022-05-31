import './App.css';
import { useSelector } from 'react-redux'
import { increment, decrement, tableoftwo } from './action'
import { useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter)
  const bool = useSelector((state) => state.login)
  const table = useSelector((state) => state.table)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello{count}</h1>
      {!bool ? <h1>Hello boolean is true</h1> : <h1>Boolean is false</h1>}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(tableoftwo())}>Table of 2</button>
      <p>{table}</p>

    </div>
  );
}

export default App;
