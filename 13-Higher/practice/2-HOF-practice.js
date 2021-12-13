// 1.   Write a higher order function that manipulates every number in an array 
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]

const changeNums = (nums, func) =>{
    const changeNums = func(nums)
    return changeNums
}
const arryTimestwo = (nums) =>{
    let product = []
    for(let i = 0; i < nums.length; i++){
       product.push(nums[i]*2)
    }
    return product
}
console.log(changeNums([1,2,3,4,5], arryTimestwo))

const arryDividetwo = (nums) =>{
    let rusult = []
    for(let i = 0; i < nums.length; i++){
       rusult.push(nums[i]/2)
    }
    return rusult
}
console.log(changeNums([1,2,3,4,5], arryDividetwo))

const arryPower = (nums) =>{
    let answer = []
    for(let i = 0; i < nums.length; i++){
       answer.push(nums[i]*nums[i])
    }
    return answer
}
console.log(changeNums([1,2,3,4,5], arryPower))

// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 1
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2

const stringInfo = (letters, func) =>{
    const stringInfo = func(letters)
    return stringInfo
}
// const Length = (letters) => {
// for(let i = 0; i < letters.length; i++){
//     return letters.length
// }
// }
// console.log(stringInfo("Howdy Partner!", Length))
// let count = 0
// let vos = ["a", "e", "i", "o", "u"]
// const vowels = (vowel) =>{
//     for(let i = 0; i < vowel.length; i++){
//         if (vos.includes(vowel[i].toLowerCase())) {
//             count ++;
//           }
//           return count
//     }

// }
// console.log(stringInfo("Howdy Partner!",vowels ))
// const capitats = (letters) => {
//     for(let i = 0; i < letters.length; i++){
//         if(letters === letters.toUppercase()){
//             return letters.length
//         }
//     }
//     console.log(stringInfo("Howdy Partner!", capitats))

// const noLetters = (letters) => {
//     for(let i = 0; i < letters.noLetters; i++){
//         return letters.noLetters
//     }

// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18
//      Ex: minimizeNums(average, [5,8,12,15]) => 10

const minimizeNums = (nums, func) =>{
    const minimizeNums = func(nums)
    return minimizeNums
}
const addArry = (nums) =>{
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    return sum
}
console.log (minimizeNums([2,3,5,8], addArry))

const findAdvrage = (nums) =>{
    let add = 0
    for(let i = 0; i < nums.length; i++){
        add += nums[i]
    }
    return add/nums.length
}
console.log (minimizeNums([5,8,12,15], findAdvrage))


