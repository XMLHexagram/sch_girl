export default (text = 'Hello Webpack!!!') => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
