import { useSelector, useDispatch } from 'react-redux';

export default function ReduxPlay() {
    const count = useSelector(state => state.counter.value);
  return (
    <div >
      Count value from ReduxPlay component is {count} 
    </div>
  )
}
