var globalGreeting = "Haloo ";

function testFunction() {
  var localGreeting = "Sigmaa ";
  console.log("function:");
  console.log(globalGreeting);
  console.log(localGreeting);
}

testFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined
