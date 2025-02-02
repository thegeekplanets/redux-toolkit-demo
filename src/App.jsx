import { decrement, incrementByAmount} from './redux/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

export function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}