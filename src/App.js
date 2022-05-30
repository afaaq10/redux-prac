import './App.css';
import { useSelector } from 'react-redux'
import { increment, decrement } from './action'
import { useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter)
  const bool = useSelector((state) => state.login)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello{count}</h1>
      {!bool && <h1>hi{bool}</h1>}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  );
}

export default App;
