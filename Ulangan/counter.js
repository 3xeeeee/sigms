let counter;
console.log(counter); // -> undefined

{
  counter = 1;
  console.log(counter); // -> 1
}

counter += 1;
console.log(counter); // -> 2
