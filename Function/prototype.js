const obj = {}
function Person() {}

const p = new Person()

p.__proto__ === Person.prototype
Person.prototype.constructor === Person

Person.__proto__ === Function.prototype
Function.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

obj.__proto__ === Object.prototype
