import React from 'react'
import { Button } from '@/shared/ui/Button/Button'

// Тестовый компонент
export const BugButton: React.FC = () => {
  const [error, setError] = React.useState<boolean>(false)

  const toggleError = (): void => {
    setError(true)
  }

  React.useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={toggleError}>
      {
        // eslint-disable-next-line i18next/no-literal-string
        'Error'
      }
    </Button>
  )
}
