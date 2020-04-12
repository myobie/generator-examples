const stats = statsGen(10)

for (let i = 0; i < 50; ++i) {
  const result = stats.next(randomInteger(100))
  console.debug({ avg: result.value })
}

function * statsGen (window) {
  let values = []

  do {
    const newValue = yield average(values)
    console.debug({ newValue, values: values.toString() })
    values = addAndRemove(values, newValue, window)
  } while (true)
}

function average (values) {
  if (values.length === 0) {
    return 0
  }

  const sum = values.reduce((acc, i) => {
    return acc + i
  })

  return sum / average.length
}

function addAndRemove (values, newValue, maxLength) {
  if (values.length === maxLength) {
    values.pop()
  }
  values.unshift(newValue)
  return values
}

function randomInteger (max) {
  return Math.ceil(Math.random() * max)
}
