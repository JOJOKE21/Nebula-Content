// cumilitive - this is the difficult part. Figuring out which HOF to use. 
// 1.   Write a hof function which returns the first number larger than 100
const arryOfNums = [1,22,55,85,20,30,101,1000]
const biggerThen100 = arryOfNums.find(num => num > 100) 
console.log(biggerThen100)
// 2.   Write a hof which lists a set of people based on their birth year
const birthYear = [{name: 'JoJo', birthyear: 1989},{name:"Jordan", birthyear:2000},{name:"sam", birthyear:1818}]
const oldest = birthYear.sort((a,b) => a.birthyear < b.birthyear? 1: -1)
console.log(oldest)

// 3.   Given an array of cars only list cars that are build pre-2000
const cars = [{model: "Doge", make: 2001},{model:"Ford", make:2012},{model:"Hona", make:1989},{model:"Hondi",make:1990}]
const pre2000 = cars.filter(car => car.make < 2000)
console.log(pre2000)
// 4.   Given an array of phone numbers return an array of protected phone numbers so that it has this structure:
//      input: 555-555-5555, output: 5##-###-#555
// const phoneNums = [555-555-5555,777-777-7777,111-111-1111,222-222-2222]
// const pNums = phoneNums.map(nums => typeof(nums) === "number".replace("#"))
// console.log(pNums)
// 5.   Given an array of numbers write a HOF that logs to the console:
//      `Thats a big number!` if it's larger than 1000 or
//      `This number isnt so big...` if its smaller than or equal to 1000
const arryNums = [1001,2000,3000,1,2,3,1000]
arryNums.forEach((num)=>{
        if(num >= 1000){
                console.log("Thats a big number!")
        }else{
                console.log("This number isnt so big!")
        }
})


// 6.   Given an array of people's name write a hof that returns only people with names longer than 5 characters
const arryOfPeople = [{name:"Joe",age:30},{name:"Jordan",age:25},{name:"Jake",age:34},{name:"Raphael",age:20}]
let longerThan5 = arryOfPeople.filter(people => people.name.length > 5)
console.log(longerThan5)

const arryOfPeople = [{name:"Joe",age:30},{name:"Jordan",age:25},{name:"Jake",age:34},{name:"Raphael",age:20}]
let longerThan5 = arryOfPeople.filter(people => people.name.length > 5)
console.log(longerThan5)

// 7.   Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest
const youngest = arryOfPeople.sort((a,b) => a.age > b.age ? 1:-1)
console.log(youngest)

// 8.   Given an array of objects, each object is a food, including an expiration date
//      return the food that will expire soonest
//      ex food: {name: 'banana', expiration: "Dec 21, 2022"}
//      hint: JavaScript Date object may be helpful
//      // new Date(year, monthIndex, day)
// const d1 = new Date(2010, 3, 28) => April, 28, 2010

// const food = [{name:"Pizza", expiration: "Dec 25, 2021"},{name:"Tacos", expiration: "March 18, 2023"},{name:"Pie",expiration:"Nov 25, 2021"}]
// const date = (2021, "Dec", 15)
// const fist = food.reduce((firstEx, food) =>{
//       if(food.expiration = firstEx.expiration){
//               return food
//       }else{
//               return firstEx
//       }
// })

// console.log(fist)


// sort
// reduce
// map
// for each
// filter
// find
