window.name = 'Window'

function Foo() {
    this.name = 'Foo'
}

Foo.prototype.getName = function () {
    console.log(this)
    return this.name + 1
}
let foo = new Foo()
let getname = foo.getName

console.log(getname()) //window Window1
console.log(foo.getName()) //foo Foo1
console.log(getname.call(Foo)) //function Foo  FOO1
