/* 原型链继承：
    JavaScript中实现继承最简单的方式就是使用原型链，将子类型的原型指向父类型的实例即可，即“子类                
    型.prototype = new 父类型();”，实现方法如下： */
//为父类型创建构造函数
function SuperType() {
  this.name = ['zc', 'ls', 'ww']
  this.property = true
}

//为父类型添加方法
SuperType.prototype.getSuperValue = function () {
  return this.property
}

//为子类型创建构造函数
function SubType() {
  this.test = ['a', 'b', 'c', 'd']
  this.subproperty = false
}

//子类型的原型指向父类型的实例sx
SubType.prototype = new SuperType()

//给子类型添加方法，一定要在实现继承之后，否则会在将指针指向父类型的实例，则方法为空
SubType.prototype.getSubValue = function () {
  return this.subproperty
}

// 测试代码
var instance1 = new SubType()
instance1.name.push('yzy')
instance1.test.push('e')
console.log(instance1)

console.log(instance1.getSuperValue()) //true
console.log(instance1.getSubValue()) //false
console.log(instance1.name)
console.log(instance1.test)

var instance2 = new SubType()
console.log(instance2)

console.log(instance2.name)
console.log(instance2.test)

var instance3 = new SuperType()
console.log(instance3)

/* 缺点：原型链代码存在的第一个问题是由于子类型的原型是父类型的实例，也就是子类型的原型中包        
    含的父类型的属性，从而导致引用类型值的原型属性会被所有实例所共享。以上代码的 
    instance1.name.push('yzy');就可以证明此问题的存在。而原型链的第二个问题就是：在创建子类型 
    的实例时，不能向超类型的构造函数中传递参数。因此我们在实际开发中，很少单独使用原型链。  */

/* 借用构造函数：
    为了解决原型链中存在的两个问题，开发人员开始使用一种叫做借用构造函数的技术来解决原型链中存在 
    的问题。这种技术的实现思路也挺简单，只需要在子类型的构造函数内调用父类型的构造函数即可。别忘 
    了，函数只不过是在特定环境中执行代码的对象，因此可以通过apply()或call()方法执行构造函数。代 
    码如下： */

//为父类型创建构造函数
function SuperType(name) {
  this.name = name
  this.color = ['green', 'red']
  this.property = true

  this.testFun = function () {
    console.log('你真棒！！')
  }
}

//为父类型添加方法
SuperType.prototype.getSuperValue = function () {
  return this.property
}

//为子类型创建构造函数
function SubType(name) {
  SuperType.call(this, name)
  this.test = ['a', 'b', 'c', 'd']
  this.subproperty = false
}

//给子类型添加方法，一定要在实现继承之后，否则会将指针指向父类型的实例，则方法为空
SubType.prototype.getSubValue = function () {
  return this.subproperty
}

//测试代码
var instance1 = new SubType(['zc', 'ls', 'ww'])
instance1.name.push('hello')
instance1.test.push('5')
instance1.color.push('blue')
instance1.testFun()
console.log(instance1.name)
// console.log(instance1.getSuperValue()); //报错
console.log(instance1.test)
console.log(instance1.getSubValue())
console.log(instance1.color)

var instance2 = new SubType('yzy')
instance2.testFun() //你真棒！！
console.log(instance2.name) // yzy
// console.log(instance2.getSuperValue()); //报错
console.log(instance2.test) // a,b,c,d
console.log(instance2.getSubValue()) // false
console.log(instance2.color) // green , red

/* 缺点：可以看到以上代码中子类型SubType的构造函数内通过调用父类型"SuperType.call(this,     
    name);"，从而实现了属性的继承，也可以在子类型创建实例的时候为父类型传递参数了，但新的问题又 
    来了。可以看到我在父类型的构造函数中定义了一个方法：testFun，在父类型的原型中定义了一个方 
    法：getSuperValue。可是在实例化子类型后仍然是无法调用父类型的原型中定义的方法 
    getSuperValue，只能调用父类型中构造函数的方法：testFun。这就同创建对象中只使用构造函数模式 
    一样，使得函数没有复用性可言。考虑到这些问题，借用构造函数的技术也是很少单独使用的。 */

function CreateObj(o) {
  function F() {}
  F.prototype = o
  return new F()
} //相当于ES5中Object.create()方法的实现

var person = {
  name: 'CC',
  friend: ['AA', 'BB'],
}

var person1 = CreateObj(person)
var person2 = CreateObj(person)

person1.name = 'person1'
console.log(person2.name) // CC
person1.friend.push('DD')
console.log(person2.friend) // ["AA", "BB", "DD"]
console.log(person) // {name: "CC", friend: Array(3)}
person1.friend = ['EE']
console.log(person1.friend) // ["EE"]
console.log(person.friend) //  ["AA", "BB", "DD"]
// 注意： 这里修改了person1.name的值，person2.name的值并未改变，并不是因为person1和person2有独立的name值，而是person1.name='person1'是给person1添加了name值，并非修改了原型上的name值
// 因为我们找对象上的属性时，总是先找实例上对象，没有找到的话再去原型对象上的属性。实例对象和原型对象上如果有同名属性，总是先取实例对象上的值
