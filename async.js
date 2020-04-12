async function * countUpTo (max) {
  let count = 0
  do {
    await wait(300)
    yield count
    count++
  } while (count <= max)
}

;(async () => {
  console.debug('running...')
  for await (const i of countUpTo(10)) {
    console.debug(i)
  }
})().catch(e => {
  console.error(e)
  console.error(e.message)
})

function wait (milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}
