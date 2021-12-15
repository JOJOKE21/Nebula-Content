// .filter()

// 1.   Write a function to filter an array for all the numbers greater than 5
const nums = ["10","2","50","1","90","3","7"]

const lessThenFive = nums.filter(number => number > 5)
console.log(lessThenFive)
// 2.   Write a function to filter an array for all the even numbers
const evenNums = nums.filter(number => number%2 === 0)
console.log(evenNums)
// 3.   Write a function to filter an array for all the non number items
const words = [1,2,3,"Hi","Hello","Bye",true,false]
const nonNum = words.filter(word => typeof(word) !== "number")
console.log(nonNum)
// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
 const people = [{name:"Jordan", age: 19},{ name:"Joe", age: 21}, { name:"Jaeda", age: 25}]
 const ageOver21 = people.filter(person => person.age >= 21)
console.log(ageOver21)
// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..
    let longSting = "aaaaabskdsdjnjnda56464863"
    longSting = longSting.split('')
    const numsOnly = longSting.filter(letters => letters.toUpperCase() === letters.toLowerCase())
    console.log(numsOnly)

