import ReduxPlay from "./components/ReduxPlay";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice.js'

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  let incrementValue = 5;

  return (
    <div>
      <ReduxPlay />
      <div className="flex bg-slate-300 justify-center items-center py-5 gap-5 font-bold">

        <button onClick={() => dispatch(decrement())}
        className="h-10 w-10 rounded-md bg-slate-600">-</button>
        <button onClick={() => dispatch(increment())}
        className="h-10 w-10 rounded-md bg-slate-600">+</button>
        <p>Counter Value {count}</p>
        <button onClick={() => dispatch(multiply())}
        className="h-10 w-10 rounded-md bg-slate-600">*2</button>
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}
        className="h-10 w-10 rounded-md bg-slate-600">{incrementValue}</button>
      </div>
    </div>
  )
}

export default App
