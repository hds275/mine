import React from 'react'

export default function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [state, setState] = React.useState(() => JSON.parse(window.localStorage.getItem(key)) || defaultValue)

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}