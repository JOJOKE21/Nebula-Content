// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)


// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
"this is O(n) becasue it only has one for loop and a output / this function ia going though the array"

// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}
"this is also O(n) this also has one output and only one return/ this function is going though the array and retruing the max"
// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]);
}
"this is O(1) because it has no loops and just an output"
// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';

    for(let i = 0; i < str.length; i+=2){
        newStr += str[i]
    }

    return newStr;
}
"this is O(n) because it only has one loops and one return/ this fuction is looping through by 2 and is adding to the new string and retring it "
// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}
"this is O(1) it is useing math eqations/ this return is duobbling the number"
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num
    return final * 3
}
"this is o(1) because it is using math eqations "
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i])
    }
    return arrReversed
}

"this is O(log n) because it is usiing a puch and is also using a retrun for that push"/ "it is o(n)"
// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}
"this is O(n^2) because in side of the function you have two loops meaning do this this abomt of  times or Num*Num(same)"
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);
"this is O( log of n) beacsue it is using push "/"its O(1)"

// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);
"this is O(log of N) because it is using unshift"/"its O(n)"

// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}

"this is O(n) because it is usin only one loop and is returning one output"/"its O(n^2)"