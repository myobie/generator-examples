const adder = add()
adder.next([1, 1]) // get things moving

for (let i = 0; i < 10; ++i) {
  const left = randomInteger()
  const right = randomInteger()
  const expectedAnswer = left + right

  const result = adder.next([left, right])
  const answer = result.value

  console.debug({
    adding: [left, right],
    expected: expectedAnswer,
    got: answer
  })
}

function * add () {
  // this is our problem
  let answer = 0

  while (true) {
    const [left, right] = yield answer
    answer = left + right
  }
}

function randomInteger (max = 50) {
  return Math.ceil(Math.random() * max)
}
