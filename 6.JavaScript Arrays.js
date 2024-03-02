/*
1.Arrays


const fruits = ["apple", "orange", "banana","shub"];

// Different data types
const data = [1, 'chicken', false];

// console.log(fruits);
console.log(fruits[3]);

2.Property .length



const numbers = [1, 2, 3, 4];


let a = numbers.length // 4


console.log(a);

3.Index

// Accessing an array element
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
4.Array Mutation


Method .push()
Add items to the end and returns the new array length.

// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear','strawberry'); 
console.log(cart);

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

console.log(numbers);

Method .pop()
Remove an item from the end and returns the removed item.
Add items to the end and returns the new array length.

const fruits = ["apple", "orange", "banana"];

const fruit = fruits.pop(); // 'banana'
console.log(fruits); // ["apple", "orange"]




// const food = ["besan","poli","gulabjamun"];

// food.push('roti');
// console.log(food);


const food=["daal","chana","makka"];
let p = food.pop();
console.log(p);
console.log(food);


Method .shift()
Remove an item from the beginning and returns the removed item.
let cats = ['Bob', 'Willy', 'Mini',"dog"];
cats.shift(); // ['Willy', 'Mini']
console.log(cats);

Method .unshift()
Add items to the beginning and returns the new array length.


let cats = ['rob','Bob','dob'];

// => ['Willy', 'Bob']
cats.unshift('Willy');
console.log(cats);

// => ['Puff', 'George', 'Willy', 'Bob']
// cats.unshift('Puff', 'George');

// console.log(cats);

Method .concat()
if you want to avoid mutating your original array, you can use concat.
*/
const numbers = [3, 2, 1]
const newFirstNumber = 4
    
// => [ 4, 3, 2, 1 ]
[newFirstNumber].concat(numbers)
console.log(numbers)
    
// => [ 3, 2, 1, 4 ]
// numbers.concat(newFirstNumber)
