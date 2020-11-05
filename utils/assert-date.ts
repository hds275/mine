const assertDate = (value: unknown): asserts value is Date => {
  if (value instanceof Date) return
  else throw new TypeError(value + 'is not a Date')
}

export default assertDate
