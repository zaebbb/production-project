import React from 'react'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'
import { Button } from '@/shared/ui/Button'

export const Counter: React.FC = () => {
  const counterValue = useCounterValue()
  const {
    increment,
    decrement,
  } = useCounterActions()

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
        {
          // eslint-disable-next-line i18next/no-literal-string
          'Increment'
        }
      </Button>
      <Button
        data-testid={'decrement'}
        onClick={decrement}
      >
        {
          // eslint-disable-next-line i18next/no-literal-string
          'Decrement'
        }
      </Button>
    </div>
  )
}
