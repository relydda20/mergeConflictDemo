export function setupCounter(element, step = 2) {
  let counter = 0
  const max = 10

  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter} (step ${step})`
  }
  element.addEventListener('click', () => setCounter(counter + step))
    element.innerHTML = `count is ${counter} / ${max}`
  }

  element.addEventListener('click', () => {
    const next = Math.min(counter + 1, max)
    setCounter(next)
  })

  setCounter(0)
}
