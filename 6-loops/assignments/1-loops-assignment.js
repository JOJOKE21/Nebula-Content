// 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
//      Each loop it should log to the console 'the current index is _'
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
// for(let i = 0; i < nums.length; i++){
//     console.log(`the cuurent index is ${nums[i]}`)
// }

// 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
//      Each loop it should log to the console the current index

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 1; i < nums.length; i += 2){
//     console.log(`the cuurent index is ${nums[i]}`)
// }
// 3.   Create an array with your top 5 celebrity names in it. 
//      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
//      Loop over the array and log each celebrity's full name to the console.
const names =['Kanye West', 'Phill McGraw', 'Steve Harvy', 'Travis Scott','Drake Graham']
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for(let i = 0; i < names.length; i++){
console.log(names[i].length)
if(names[i].length%2 === 0){
    console.log(names[i])
}
}

// 5.   Use the your celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
const fNames = []
for(let i = 0; i < names.length; i++){
    fNames.push(names[i].split(" ")[0])   
}
console.log(fNames)
// // }    
// // }
// // // 6.   Use the your celebrity array for this question
// // //      Create a for loop which will output two separate arrays, one with only initials, one with only last names
 const lNames = []
 for(let i = 0; i < names.length; i++){
    lNames.push(names[i].split(" ")[1])   
}
console.log(lNames)
// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console

let vowels = ["a", "e", "i", "o", "u"];
let vowelsOnly = "";
for (let celeb of celebs) {
for (let letter of celeb) {
if (vowels.includes(letter)) {
vowelsOnly += letter;
}
}
}
    


// 8.   Loop over the celebrity list and then loop through each name. 
//      If a letter is uppercase, log it to the console

for (celeb of celebs) {
    for (letter of celeb) {
    if (letter === letter.toUpperCase() && letter !== " ") {
    console.log(letter);
    }
    }
    }

// 9.   Convert your celebrity array to all caps and no spaces:
//      Ex:
//        Input:  ['Martha Stewart', 'David Beckham', etc..] 
//        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

const newCelebArray = [];
for (celeb of celebs) {
let celebAllCaps = "";
for (letter of celeb) {
if (letter === " ") {
celebAllCaps += "-";
} else {
celebAllCaps += letter.toUpperCase();
}
}
newCelebArray.push(celebAllCaps);
}
console.log(newCelebArray);

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop


//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console

