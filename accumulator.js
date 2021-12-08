// write a function that takes in an array of numbers and returns the sum of all those numbers

const sum = function (myArray) {
    // output variable here the sum
    let value = 0;
    // for loop through each element in myArray
    for (let i = 0; i < myArray.length; i++) {
        // calculate whatever the function needs you to do
        value += myArray[i];
    }
    // return the output
    return value;
}

console.log(sum([1, 2, 3, 4])) //10;


// write a function that removes all of the instances of the letter e from a string (case-insensitive)

function removeEs(str) {
    // output variable
    let output = '';
    // for loop
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        //conditonally remove es
        if (currentLetter !== 'e' && currentLetter !== 'E') {
            //add to our output
            output += currentLetter;
        }
    }
    return output;
}

console.log(removeEs('My name is abe')); // 'My nam is ab'

// write a function that takes in an array of numbers and doubles each number in that array [WITHOUT MUTATING THE ORIGINAL]

function doubler(array) {
    //create output
    let newArray = [];
    // loop through each element in array
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        // newArray[i] = currentNumber * 2; or this
        newArray.push(currentNumber * 2);
    }
    // return the output
    return newArray;
}


console.log(doubler([1, 2, 3, 4, 5])) // [2,4,6,8,10]

// write a function that takes in a string and removes any instances of an '!' or a space

function removeS(str) {
    let output = '';
    for (i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (currentLetter !== "!" && currentLetter !== " ") {
            output += currentLetter;
        }
    }
    return output
}
console.log(removeS("The Pizza In This Pace Is Amazing !!!"))

// write a function that takes in an array of numbers and finds the average of them

function find_average(array) {
    let number = 0;
    let findAdvrage = array.length
    if (array.length === 0) {
        return 0
    }
    for (i = 0; i < array.length; i++) {
        number += array[i]
    }
    return number / findAdvrage;
}
console.log(find_average([1, 2, 3, 4]))

// write a function that takes in a number as an input and removes all odd numbers from it

function odd(number) {
    let odds = ''
    for (let i = 0; i < number.length; i++) {
        let currentNumber = number % 2
        if (currentNumber === 1) {
            output += currentNumber
        }
    }
    return odds
}
console.log(odd(1, 2, 3, 4, 5, 6))