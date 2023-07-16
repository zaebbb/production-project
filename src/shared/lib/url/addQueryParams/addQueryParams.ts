/**
 * Функция получения строки в виде параметров URL
 * @param params
 * @return string
 */
export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach(([param, value]) => {
    if (value) {
      searchParams.set(param, value)
    }
  })

  return `?${searchParams.toString()}`
}

/**
 * Функция добавления параметров строки запросов URL
 * @param params
 * @return void
 */
export const addQueryParams = (params: OptionalRecord<string, string>): void => {
  window.history.pushState(
    null,
    '',
    getQueryParams(params)
  )
}
