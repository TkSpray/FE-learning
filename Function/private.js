function Person(name) {
  let personName = name;
  this.getName = function () {
    return personName;
  };
  this.setName = function (name) {
    personName = name;
  };
}
