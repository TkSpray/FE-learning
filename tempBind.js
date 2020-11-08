function Person(name) {
  let persoName = name;

  this.getName = function () {
    return persoName;
  };

  function setName(val) {
    persoName = val;
  }
}
