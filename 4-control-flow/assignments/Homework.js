//1. Write a statement that checks if 2 and 'two' are equal
let two = 2
if(two === 2){
    console.log('Equal')
}
//2. Write a statement that checks if '2' and 2 are loosely equal
if('2' == 2){
    console.log('Equal')
}
else {console.log('not equal')
}
//3. Write a statement that checks if 14 and '14' are strictly equal
if(14 === '14'){
    console.log('Equal')
} 
else {console.log('not equal')}
//4. Write a statement that checks if 10 is greater than -100
if(10 > -100){
    console.log(true)
}
else{ console.log(false)}
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
if(4 === Math.round(4.4)){
    console.log(true)
}
else(console.log(false))
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
if( 10 >= Math.ceil(9.1)){
    console.log(true)
}
else(console.log(false))
//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
if(10 > 2 && 3 > 4){
console.log(true)    
}
else(console.log(false))
  // 7.a Without changing any of the numbers, or their order. How do we make this print true?
  if(10 > 2 || 3 > 4){
    console.log(true)    
    }
    else(console.log(false))
//8. Pick a number between 1-20 and assign it to a variable
let number = Math.ceil(Math.random()*20)
  // This is the number of watermelons you purchased.
  // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
  // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
  // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
  // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
  // If your number of watermelons is more than 15, print, 'Did you have a coupon?'
console.log(number)

//  if(number === 1 || number === 2){
//     console.log('Looks like you like watermelon')
//  }
// else if (number > 2 && number <= 5){
//     (console.log('That is a lot of watermelon')) 
// }
//  else if(number > 5 && number <= 10){ 
//      (console.log('Thats too many watermelom'))
//  }
// else if (number > 10 &&  number <= 15){ 
//     (console.log('You must be CRAZY for watermelon'))
// }
// else if (number > 15){
//     (console.log('Did you have a coupon?'))
// }
    





//9. Create a variable that represents your current hunger on a level of 1-10
  // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
  // Otherwise print. "I'm not hungry"
let hunger = 2
// if(hunger > 6){
//     console.log('time to eat!')
// }
const food = hunger > 6 ? "Time to eat!" : "Im not hungery"
console.log(food)
// else( console.log("Im not hungry"))
// console.log(hunger)
// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement?
  // Ex: 
    // I update a question variable to say "Will I win the lottery?"
    // I run node <FILENAME> 
    // The console prints out:
      // Will I win the lottery? Not Likely. 

    //   let magic = Math.ceil(Math.random()*9)
    //   switch(magic) {
    //       case 1 :
    //           console.log('Your number is 1')
    //           break;
    //         case 2 :
    //             console.log('Your number is 2')
    //             break;
    //         case 3 :
    //             console.log('Your number is 3')
    //             break;
    //         case 4 : 
    //             console.log('Your number is 4')
    //             break;
    //         case 5 :
    //             console.log('Your number is 5')
    //             break;
    //         case 6 : 
    //             console.log('Your number is 6')
    //             break;
    //         case 7 : 
    //             console.log('Your number is 7')
    //             break;
    //         case 8 : 
    //             console.log('Your number is 8')
    //             break;
    //     console.log(magic)
        
    //   }

  // Pseudocode:
    // variable that holds a randomly generated number
    // variable for holding the question
    // switch statement that picks responses based on the random number variable 
// let num = Math.ceil(Math.random()*3)
// let question = 'yes'
// let question2 = 'No'
// let question3 = 'Maybe'
// switch(num){
//     case 1 :
//         console.log(question)
//         break;
//     case 2 : 
//         console.log(question2)
//         break;
//     case 3 :
//         console.log(question3)
//         break;
// }
// BONUS:
  // On the prior example, try and have the answer print like someone is speaking to you.
  
  // Ex:
    //Input:  Will I win the lottery?
    //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

  // Ex2:
    // Input: Will I get a new pet this year?
    // Output: Will you get a pet this year? It is certain. 

  // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?