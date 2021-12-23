// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array
    // const array = [1,2,3,4,5]
    // const newArray = array.map(num => num * 2);
    // console.log(newArray)
// 2.   Using .map() create a new array that halves all numbers in a given array
// const array1 = [1,2,3,4,5]
// const newArray1 = array1.map(num => num / 2);
// console.log(newArray1)

// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
// const array2 = [1,2,3,4,5]
// const newArray2 = array2.map(num => Math.pow(num,2));
// console.log(newArray2)


// 4.   Using .map() create a new array of all capital strings from an array of lower case strings
// const arrayName = ["j","o","r","d","a","n"]
// const newArray3 = arrayName.map(name => name.toUpperCase());
// console.log(newArray3)

// 5.   Using .map() create a new array of greeting sentences from an array of given people
//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
// let people = [
//     {name: 'Pamela'}, 
//     {name: 'Micheal'},
//     {name: 'Angela'}
// ]

// const newArray4 = people.map(greeting => greeting = `Hello${people.name}`)
// console.log(newArray4)

let string = ['hello', 'hi']
const reverseStr = string.map(str => str.split("").reverse().join(""))
console.log(reverseStr)