import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'

export const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1
        data-testid={'value-title'}
      >
        {counterValue}
      </h1>
      <Button
        data-testid={'increment'}
        onClick={increment}
      >
        Increment
      </Button>
      <Button
        data-testid={'decrement'}
        onClick={decrement}
      >
        Decrement
      </Button>
    </div>
  )
}
