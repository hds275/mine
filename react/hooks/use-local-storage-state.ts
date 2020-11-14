import React from 'react'

export default function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) return JSON.parse(valueInLocalStorage)
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}