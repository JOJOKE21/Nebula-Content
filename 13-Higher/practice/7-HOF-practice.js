//.find()

// 1.   Write a HOF to find the first number greater than 10 in an array
const arryOfNums = [1,2,5,12,56,0,3]
const graterThen10 = arryOfNums.find(number => number > 10)
console.log(graterThen10)
// 2.   Write a HOF to find the first string in an array
const arry = [1,2,3,"Pizza","Pie","Tacos"]
const string = arry.find(string => typeof(string) === "string")
console.log(string)
// 3.   Write a HOF to find the first instance of undefined in an array 
const random = [1,5,6,"hi","hello","bye",undefined,false,true,null]
const unknowm = random.find(word => word === null)
console.log(unknowm)