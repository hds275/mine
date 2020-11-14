import React from 'react'

export default function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [state, setState] = React.useState(() => window.localStorage.getItem(key) || defaultValue)

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state])

  return [state, setState]
}