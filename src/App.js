/**
 * @author Afaaq Majeed
 * @link  https://github.com/afaaq10/redux-prac
 */


import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, login } from './action'
function App() {
  const count = useSelector((state) => state.counter)
  const bool = useSelector((state) => state.login)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {!bool && <p>I am a boolean true</p>}

    </div>
  );
}

export default App;
