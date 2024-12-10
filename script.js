function twice(func) {
  return function() {
    func();
  }
}

function sayHello() {
  console.log("Hello");
}

const sayHelloTwice = twice(sayHello);
sayHelloTwice();