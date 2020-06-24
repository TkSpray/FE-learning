require('./main.css')
import { cube } from './math.js'

function component() {
  var element = document.createElement('div')
  var button = document.createElement('button')
  var br = document.createElement('br')

  button.innerHTML = 'Click me and look at the console!'
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  )
  element.appendChild(br)
  element.appendChild(button)

  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ './print').then((module) => {
      var print = module.default
      print()
    })
  return element
}

document.body.appendChild(component())
