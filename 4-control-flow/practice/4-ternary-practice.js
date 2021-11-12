// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called CreditCardNum, set it equal to a fake credit card string-number
let CreditCardNum = '457896315487148'
// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
let last4ss = '6678'
// Initialize a variable called userId, set it equal to a fake user ID
let userId = '5'
// Initialize a variable called password, set it equal to a fake password
let password = '6'
// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
let inputId = '9'
let inputPass = '6'
// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
let text = inputId === userId ? "welcome" : "good bye";
let text2 = inputPass === password ? "welcome" : "good bye"

console.log(text + ' ' + text2)

// If they are the same, log the credit card num and the last4SS
let correct = inputId === userId && inputPass === password ? console.log(CreditCardNum + ' ' + last4ss) : 'Incorrect username or Id' 
// If not, log 'incorrect username or id'
console.log(correct)