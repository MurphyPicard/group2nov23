
// ES6 // arrow functions //simple example
var sumE6 = (num1, num2) => num1 + num2;
console.log(sumE6(3,5));

// ES5
function sumE5(num1, num2){
return num1 + num2;
}
console.log(sumE5(4,9));

var stringReverse = (word) =>{
  let newWord = [];
  for (let i = word.length - 1; i <= 0; i--){
    newWord.push(word[i]);
  }//for
  newWord.join();

};

console.log(stringReverse('Nayana'));







//parameters



















//shortening object properties and methods
