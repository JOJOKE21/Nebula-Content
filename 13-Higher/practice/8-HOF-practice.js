// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1,25,6,3,88,45,0]
const sorted = nums.sort((a,b) => a < b ? 1 : -1)
console.log(sorted)

// 2.   Write a HOF to sort an array of numbers from smallest to largest
const numsA = [1,25,6,3,88,45,0]
const sortedS = nums.sort((a,b) => a > b ? 1 : -1)
console.log(sortedS)


// 3.   Write a HOF to sort peoples names by their length
const names = [{name:"Joe"},{name:"Tina"},{name:"Steven"},]
const longest = names.sort((a,b) => a.name.length > b.name.length ? 1 : -1)
console.log(longest)


// 4.   Write an HOF to sort an array of objects of people by their age youngest to largest
const namesY = [{name:"Joe", age:55},{name: "Jordan", age:10}, {name:"Jake", age:18}]
const yougest = namesY.sort((a,b) => a.age > b.age ? 1 : -1)
console.log(yougest)

// 5.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ["pizza","tony","paul","Hi"]
const letter = strings.sort((a,b) => a.length-1 < b.length-1 ? 1 : -1 )
console.log(letter)