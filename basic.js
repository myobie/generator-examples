function * countUpTo (max) {
  let count = 0
  do {
    yield count
    count++
  } while (count <= max)
}

for (const i of countUpTo(15)) {
  console.debug(i)
}
