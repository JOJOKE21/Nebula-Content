// 1.   What is the order of output?
//b,e,d,c,h,i,a,f,g

// setTimeout(() => {
//     console.log('a');
// }, 1);
// console.log('b');

// new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
// console.log('e');

// setTimeout(() => {
//   console.log('f');
// }, 0);

// setTimeout(() => {
//     console.log('g');
// }, 3);

// new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

// "b,e,c-d,h-i,f,a,g"
// 2.   Create a promise for something you may, or may not do.
let trashPromise = true
let trashOut = new Promise( function (resolve, reject){
    setTimeout(() => {
        if(trashPromise){
        resolve("I have taken out the trash")
    } else{
        reject("No not yet")
    }
    }, 5000);  
}) 
.then(val => console.log(`This is the value; ${val}`))
.catch(val => console.log(`This is the rejected value; ${val}`))
console.log(trashOut)
//setTimeout(() => {console.log(trashOut)}, 5001)
// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.
// let trashOutL = new Promise( function (resolve, reject){
//     setTimeout(() => {
//     console.log("I have taken out trash") 
//     }, 5000);
  
// })
// 4.   Using the prior example use .then and .catch to handle responses and rejections


// 5.   What does a promise resolve to?

"Pending" 
"Fulfilled"
"Rejected"


// 7. What is the output of the following code?
// const promise = new Promise(res => res(2));
// promise.then(v => {
//     console.log(v);
//     return v * 2;
// })
// .then(v => {
//     console.log(v);
//     return v * 2;
// })
// .finally(v => {
//     console.log(v);
//     return v * 2;
// })
// .then(v => {
//     console.log(v);
// });

// "it is 2 then 4 then unddefined then 8 


