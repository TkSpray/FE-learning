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

function jsonp({ url, params, cb }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    window[cb] = function (params) {
      resolve(params)
    }
    params = { ...params, cb }
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
  params: { wd: 'a' },
  cb: 'show',
}).then((data) => {
  console.log('jsonp跨域请求的数据为：', data)
})
