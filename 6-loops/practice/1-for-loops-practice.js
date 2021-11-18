// 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
//      Each loop it should log to the console the current index
// for(let i = 0; i <= 20; i++){
//         console.log(i)
// }
// // 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
// //      Each loop it should log to the console the current index
// for(let i2 = 1; i2 <=40; i2+=2)
//         console.log(i2)
// // 3.   Create an array with the classes participant names in it. 
//      Inside the loop declare an unrequired, but useful variable to represent the current participant
//      Loop over the array and log each participant's name to the console.
// const stendents = ['Jordan', 'Kelly', 'Daniel']
// for(let i = 0; i < stendents.length; i++){
//         console.log(stendents[i])
// }

// // 4.   Use the array below for the following question
// //      Loop over the numArray & ONLY log even numbers to the console.
// //      Hint 1: There will be an IF statement within the loop
// //      Hint 2: Be sure to check if the value is even, not the index
//         const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
// for(let i = 0; i < numArray.length; i++){
//         if(numArray[i] % 2 === 0){
//                 console.log(numArray[i])
//         }
// }
// // 5.   Use the above numArray for this question
// //      Create a for loop which will iterate over each element and output a new array of only odd numbers
//  const oddNums = []
//  for(let i = 0; i < numArray.length; i++){
//          if(numArray[i] % 2 !== 0){
//                 oddNums.push(numArray[i])
//          }
//  } 
//  console.log(oddNums)
// 6.   Create a for loop which will output two separate arrays, one with only positive numbers, one with only negative numbers

const numArray = [5, 3, -2, 1, 10, -20, 30, -22, 33, -12, 11, -9, 6, 3];

const posArr = []
const negArr = []

for(let i = 0; i < numArray.length; i++){
        if(numArray[i] >= 0 ){
                posArr.push(numArray[i])
        }else(
                negArr.push(numArray[i])
        )
}
console.log(posArr)
console.log(negArr)