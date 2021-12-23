// .reduce()

// // 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const arryOfNums = [,1,2,3,4,5,6]///21
let sum = (arryOfNums.reduce((addition, number) => addition + number))
console.log(sum)

// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
const arryOfNums = [1,2,3,4,5,6,7,8,9,10]
let product = (arryOfNums.reduce((mutipacation, number) => mutipacation * number))
console.log(product)


// // 3.   Write a HOF to reduce all numbers in an array to the largest number 
const arryOfNumsB = [,1,2,3,4,5,6]///720
let number = (arryOfNums.reduce((large, number) => large = number))
console.log(number)


// // 4.   Write a HOF to find the oldest person in a group
const people = [{name: "Jake", age: 20},{name: "JoJo", age:55}, {name:"Oh boy", age:250}]
let oldest = (people.reduce((person, ages) => person.age = ages))
console.log(oldest)
// // 5.   Write a HOF to make an array of mixed data into a new array of only strings