import { classNames } from './classNames'

describe('Утилита classNames', () => {
  test(
    'Передача одного параметра',
    () => {
      expect(
        classNames('className')
      ).toBe('className')
    }
  )

  test(
    'Передача одного параметра + в третьем аргумента массив из одного значения',
    () => {
      expect(
        classNames('className', {}, ['class'])
      ).toBe('className class')
    }
  )

  test(
    'Использование модов',
    () => {
      expect(
        classNames('className', { check: true })
      ).toBe('className check')
    }
  )

  test(
    'Использование модов + 1 мод на false',
    () => {
      expect(
        classNames('className', { check: true, disable: false })
      ).toBe('className check')
    }
  )

  test(
    'Использование модов + 1 мод undefined и 1 мод на null',
    () => {
      expect(
        classNames('className', { check: null, disable: undefined }, ['class'])
      ).toBe('className class')
    }
  )
})
