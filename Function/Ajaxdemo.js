const { resolve } = require('path')
const { rejects } = require('assert')

const Ajax = function (url) {
  const AjaxPromise = new Promise(function (res, rej) {
    const handle = function () {
      if (this.readyState !== 4) return
      if (this.status === 200) {
        resolve(this.response)
      } else reject(new Error(this.statusText))
    }
    const xml = new XMLHttpRequest()
    xml.open('GET', url)
    xml.onreadystatechange = handle
    xml.responseType = 'json'
    xml.setRequestHeader('Accept', 'application/json')
    xml.send()
  })
  return AjaxPromise
} // Promise

function ajaxJs(options) {
  options = {
    url: 'http://test/login',
    type: 'post',
    data: {
      username: 'username',
      password: 'password',
    },
    dataType: 'json',
    timeout: 10000,
    contentType: 'application/json',
    success: function (data) {},
    //异常处理
    error: function (e) {
      console.log(e)
    },
  }
  options = options || {}
  options.type = (options.type || 'GET').toUpperCase()
  options.dataType = options.dataType || 'json'
}
