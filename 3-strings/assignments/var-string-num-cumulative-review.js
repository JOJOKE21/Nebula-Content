// 1. Create two string variables and concatenate them 
let string = "Hello"
let string2 = "World"
console.log(string.concat(string2))
// 2. Create variables; name, age, and favoriteFood and using a template literal return the string 
//'Hello, my name is _ , I am _ years old and my favorite food is _'
        // Note, the underscores should be replaced by your variable values
const name = "Jordan"
let age = 19
let favoriteFood = "Pizza"
console.log(`Hello, my name is ${name} , I am ${age} years old and my favorite food is ${favoriteFood}`)
// 3. Using JavaScript, find the length of "Finding the length of a string is easy!"
let answer = "Finding the length of a string is easy!"
console.log(answer.length)
// 4. PT 1: Create a variable and set it equal to a random number between 0 and 50
//      PT 2: Reassign that variable to the nearest whole number
let num = Math.random()*50
console.log(num)
console.log(Math.round(num))
// 5. Using the string below, console.log you last name
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let flet = letters[9]
        let Slet = letters[14]
        let Tlet = letters[17]
        let Flet = letters[3]
        let Selet = letters[0]
        let Silet = letters[13]
console.log(flet + Slet + Tlet + Flet + Selet + Silet)
// 6. PT 1: Create a variable and set it equal to a number
//     PT 2: Reassign that variable to the value of it times itself
//     PT 3: console.log the square root of the new value
let number = 5
let numtimes = number*5
console.log(Math.sqrt(numtimes))
// 7. Create a variable and set it equal to a string and then console.log the last letter
let myName = 'Jordan'
console.log(myName[5])
// 8. Using the string below, console.long only your name use .slice
        let classList = 'The people is this class are Daniel, Jordan, and Kelly'
let fn = classList[37]
let sn = classList[38]
let tn = classList[39]
let fnn = classList[40]
let fnnn = classList[41]
let Snn = classList[42]
console.log(fn + sn + tn + fnn + fnnn + Snn)
// 9. Don't just count. Using JS and the string below, what index is 'w' at?
        let stringExample = 'The index and character position are actually two different numbers because indexes start with 0'
console.log(stringExample.indexOf("w"))
// 10. Create variables for the number 33 and the number 7. 
//      Using two different Math methods, create new variables from these numbers
//      There should now be 4 total variables what they mean is to use math.(dot)
let num2 = 33
let num3 = 7
let num22 = num2*2
let num33 = num3+3
let total = console.log(num2 + ' ' + num22 + ' ' + num3 + ' ' + num33 )
// BONUS: Given the list of names below, use a JavaScript method to find the one that would come first in a dictionary
    let nameList =  'George, Heather, Peter, Anna, Josh, Linda'
       console.log(nameList.slice(24,28))