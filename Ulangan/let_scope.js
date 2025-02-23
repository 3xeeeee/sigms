let counter = 100;
console.log(counter); // -> 100

{
  let counter = 200;
  console.log(counter); // -> 200 (hanya dalam blok ini)
}

console.log(counter); // -> 100 (nilai global tidak berubah)
