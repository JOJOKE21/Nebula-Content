// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

const math = (num1, num2, func) => {
    const calculate = func(num1, num2)
    return calculate
}
function takeInTwoNumbers(num1, num2){
    return num1 * num2;
}
const subtractTwoNumbers = (num1, num2) => {
    return num1 - num2
}
const dividTwonumbers = (num1, num2) => {
    return num1 / num2
}
console.log(math(2,4, takeInTwoNumbers))
console.log(math(2,4,subtractTwoNumbers))
console.log(math(2,4, dividTwonumbers))

// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      This will require usage of 'args' object that we have access to in a function
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14
    const calculateAll = (nums, func) =>{
        const calculateAll = func(nums)
        return calculateAll
    }
    const multiplyArr = (nums) =>{
        let product = 1
        for(let i = 0; i < nums.length; i++){
            product *= nums[i]
        }
        return product
    }
console.log (calculateAll([1,4,1,231,5],multiplyArr))

const subtractArr = (nums) =>{
    let differnce = nums[0]
    for(let i = 1; i < nums.length; i++){
        differnce -= nums[i]
    }
    return differnce
}
console.log (calculateAll([2,4,5,7],subtractArr))

// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

// const change = (func, word) => {
//   return func(word)
// }
// const yeller = (word) =>{
//     return word.toUpperCase()
// }
// console.log(change(yeller,"I need a nap"))
// const sarcastic = (words) =>{
//     return words.toUpperCase()
// }
// for(let i = 0; i < sarcastic.length; i+2){
//     console.log(change(sarcastic,"I really like runing"))
// }


// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]

const type = (array, func) =>{
const oneType = func(array)
return oneType
}
