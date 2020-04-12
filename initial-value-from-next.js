const adder = add()

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
  let [left, right] = yield 0

  while (true) {
    ;[left, right] = yield left + right
  }
}

function randomInteger (max = 50) {
  return Math.ceil(Math.random() * max)
}
