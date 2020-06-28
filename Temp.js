function fn() {
  var max = 10
  return function bar(x) {
    if (x > max) {
      console.log(x)
    }
  }
}
var f1 = fn()
f1(15)

var max = 10,
  fn = function (x) {
    if (x > max) {
      console.log(x) //15
    }
  }
;(function (f) {
  var max = 100
  f(15)
})(fn)

function dpr() {
  var desW = 640,
    winW = document.documentElement.clientWidth,
    n = winW / desW
  document.documentElement.style.fontSize = n * 100 + 'px'
}

/**
 * @param {Boolean} [normal = false] - 默认开启页面压缩以使页面高清;
 * @param {Number} [baseFontSize = 100] - 基础fontSize, 默认100px;
 * @param {Number} [fontscale = 1] - 有的业务希望能放大一定比例的字体;
 */
const win = window
export default win.flex = (normal, baseFontSize, fontscale) => {
  const _baseFontSize = baseFontSize || 100
  const _fontscale = fontscale || 1

  const doc = win.document
  const ua = navigator.userAgent
  const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
  const UCversion = ua.match(/U3\/((\d+|\.){5,})/i)
  const isUCHd =
    UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80
  const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
  let dpr = win.devicePixelRatio || 1
  if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
    // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
    dpr = 1
  }
  const scale = normal ? 1 : 1 / dpr

  let metaEl = doc.querySelector('meta[name="viewport"]')
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    doc.head.appendChild(metaEl)
  }
  metaEl.setAttribute(
    'content',
    `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`
  )
  doc.documentElement.style.fontSize = normal
    ? '50px'
    : `${(_baseFontSize / 2) * dpr * _fontscale}px`
}

function Animal(name) {
  this.name = name | 'animal'

  this.sleep = function () {
    console.log(this.name + '在睡觉')
  }
}

Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food)
}

function Dog() {}

Dog.prototype = new Animal()

Dog.prototype.name = 'dog'

var dog = new Dog()

console.log(dog.name)

console.log(dog.sleep())

console.log(dog instanceof Dog)

console.log(dog instanceof Animal)
