export function setupCounter(element, step = 2) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter} (step ${step})`
  }
  element.addEventListener('click', () => setCounter(counter + step))
  setCounter(0)
}
