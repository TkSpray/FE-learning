require('./main.css')

function component() {
  var element = document.createElement('div')

  element.innerHTML = 'Hello,Webpack'
  element.id = 'app'

  return element
}

document.body.appendChild(component())
