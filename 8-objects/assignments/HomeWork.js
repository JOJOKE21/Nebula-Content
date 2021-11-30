// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)

// const car  = {
//     color: 'black',
//     model: '2022 dodge charger',
//     engine: 'V8',
//     config: 'sedan',
//     horsepower: '717-797',
//     price: '$72,350'
// }
// console.log(car)
// // 2.   Using dot-notation Log to the console 3 properties from the previous object
// car.color = 'white'
// car.engine = 'V6'
// car.config = 'coupe'
// console.log(car)
// // 3.   Using bracket-notation Log to the console 3 properties from the previous object
// car['color'] = 'purple'
// car['engine'] = 'V8'
// // car['config'] = 'sedan'
// // // console.log(car)

// // // // 4.   Try and log a property that doesn't already exist - what output do we get?
// // // 'we would get a not defined'
// // // // 5.   Add a new key-value pair to the vehicle. 
// // // car.mpg = '12'
// // // console.log(car)
// // // // 6.   Using bracket-notation update a property on the vehicle. 
// // // car['color'] = 'red'
// // // console.log(car)
// // // // 7.   Using dot-notation update a property on the vehicle. 
// // // car.mpg = '21'
// // // console.log(car)
// // // 8.   Create a method for turning your vehicle on

// // const car  = {
// //     color: 'black',
// //     model: '2022 dodge charger',
// //     engine: 'V8',
// //     config: 'sedan',
// //     horsepower: '717-797',
// //     price: '$72,350',
// //     start: function(){
// //     console.log("Vroom Vroom");
// // } 
// // }
// // console.log(car)
// // function startCar(){
// //     console.log("Vroom Vroom!");
// // }

// // car.start = startCar;

// // car.start();


// // // 9.   Create a method for turning your vehicle off 
// // const car  = {
// //     color: 'black',
// //     model: '2022 dodge charger',
// //     engine: 'V8',
// //     config: 'sedan',
// //     horsepower: '717-797',
// //     price: '$72,350',
// //     off: function(){
// //     console.log('Power down');
// // } 
// // }
// // console.log(car)
// // function turnOfCar(){
// //     console.log('Power dowm')
// // }
// // car.off = turnOfCar;
// // car.off()



// //10.   
// //      a. Check if your vehicle is on (it should be off)
// //      b. Start your vehicle
// //      c. Check if your vehicle is on (it should be on)
// //      d. Stop your vehicle
// //      e. Check if your vehicle is on (it should be on)

// const car  = {
//     color: 'black',
//     model: '2022 dodge charger',
//     engine: 'V8',
//     config: 'sedan',
//     horsepower: '717-797',
//     price: '$72,350',
//     start: function(){
//     console.log("Vroom Vroom");;
// } 
// }
// console.log(car)
// function startCar(){
//     console.log("Vroom Vroom!");
//     car.owner = "Jordan";
// }


// car.start = startCar;



// const car = {
//     color: 'Green',
//     engine: 'V8',
//     exhaust: 'Dual Rear Exit'
// };

// car.engine = 'V6';
// // We've changed the engine property on our car object

// car.topSpeed = '125 mph';
// // What?? Oh, we can add a brand new property like this too

// console.log(car);

let score = 40

if( score >= 80){
    console.log("excellent")
    } else if ( score >= 60){
    console.log("ok")
    } 
 else if( score < 59){
    console.log("failed")
    }