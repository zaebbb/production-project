import { getQueryParams } from './addQueryParams'

describe('Тест addQueryParams.test', () => {
  test(
    'Тестирование с одним параметров',
    () => {
      const param = getQueryParams({
        test: 'tester',
      })

      expect(param).toEqual('?test=tester')
    }
  )

  test(
    'Тестирование с несколькими параметрами',
    () => {
      const param = getQueryParams({
        test: 'tester',
        search: 'hello_world',
        mock: 'check',
      })

      expect(param).toEqual('?test=tester&search=hello_world&mock=check')
    }
  )

  test(
    'Тестирование с параметром undefined',
    () => {
      const param = getQueryParams({
        test: 'tester',
        search: undefined,
      })

      expect(param).toEqual('?test=tester')
    }
  )
})
