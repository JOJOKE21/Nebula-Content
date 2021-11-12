// 1.   Create an array that contains two of your favorite things to do
let arr = ['Eating', 'Spleeping']
console.log(arr)
// 2.   Using an array method, add another thing you like to do to that list
arr.push('Gaming')
console.log(arr)
// 3.   Reverse the order of the array (remember, if needed use MDN)
arr.reverse()
console.log(arr)
// 4.   Using this array: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let arr2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(arr2)
// 5.   log the length of the array
console.log(arr2.length)
// 6.   log the 4th element in the array
console.log(arr2[4])
// 7.   Remove the first element in the array. Log the new array and the element removed from the array
const revomed = arr2.shift('Sunday')

console.log(arr2 + ' ' + revomed)
// 8.   Put 'Sunday' back at the beginning of the array (.unshift) and log the new array
arr2.unshift('Sunday')
console.log(arr2)
// 9.   Remove the last element in the array. Log the new array and log the element removed
const revomed2 = arr2.pop('Saturday')

console.log(arr2 + ' ' + revomed2)
//10.   Add 'Saturday' back to the end of the array and log the new array
arr2.push('Saturday')

console.log(arr2)
//11.   Replace 'Thursday' with 'Friday Junior'
arr2[4] = 'Friday Junior';
console.log(arr2)
//12.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const holdstring = arr2[5]

console.log(`My favorite day of the week is ${holdstring}`)

//13.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

let tech = phone.concat(laptop)
console.log(tech)