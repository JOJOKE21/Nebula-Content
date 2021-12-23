// /* 
// Write a class that creates animals
// The animals should make a noise
// The class should log what the animal eats
// The class should log where the animal lives
// Initialize 3 animals with your class & log a sentence to the console, ex:
// `Dogs live in peoples houses, they bark and are carnivorous.`
// */

// class animals{
//     constructor(name,noise,food,lives){
//         this.name = name
//         this.noise = noise;
//         this.food = food;
//         this.lives = lives
//     }
//     animal(){
//        return `${this.name}: ${this.lives}, they ${this.noise} and are ${this.food}`
//     }
// }

// const cat = new animals("Cat","Meow","carnivorous","Live in peoples houses")
// console.log(cat.animal())
// const elepahnt = new animals("elepahnt","Loud?","Herbivorous","live in the wild")
// console.log(elepahnt.animal())
// const bear = new animals("Bear","Roar?","Omnivores","Live in the wild")
// console.log(bear.animal())
// /* 
// Write a class that creates shoes
// The shoe should have a size, color, type, and age. 
// Initialize 3 shoes with your class & log a sentence to the console: ex:
// `My flipflops are yellow, size 9, and 6 years old.` 
// */

// class shoe{
//     constructor(size,color,type,age){
//         this.size = size;
//         this.color = color;
//         this.type = type;
//         this.age = age;
//     }
//     myshoe(){
//         return `My ${this.type} are ${this.color}, size ${this.size} and are ${this.age}`
//     }
// }
// const sneakers = new shoe(12,"Black","addidas","2 years old")
// console.log(sneakers.myshoe())
// const boots = new shoe(11,"White","Timberlands boots","1 years old")
// console.log(boots.myshoe())
// const flipers = new shoe(10,"Blue","Dollar Tree brand flppers?","5 years old")
// console.log(flipers.myshoe())
// /* 
// Given the following class that can create shapes, write an extension which will calculate the Surface Area and Volume of a given shape. 
// Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shape
// Log to the console a sentnece about your shape:
// `Given a cylander of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.` 
// */
// //Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))


// class Shape {
//     constructor(name,height){
//         this.name = name
//         this.height = height;
       
//     }
// }

// class Rectangle extends Shape{
//     constructor(name,height,base,area){
//     super(name,height)
//     this.base = base
//     this.area = area
// }
// Area(){
//     return `Given a ${this.name} with a base of ${this.base} and a height of ${this.height} we have an area of ${this.area}`
// }
// }

// const rec = new Rectangle("Rectangle",2,4,8)
// console.log(rec.Area())


// class Triangle extends Shape{
//     constructor(name,area,base,height,half){
//     super(name,height)
//     this.area = area
//     this.base = base
//     this.half = half 
// }
// Area(){
//     return `Given a ${this.name} with a base of ${this.base} and a height of ${this.height} we divide by ${this.half}, and get an area of ${this.area}`
// }
// }

// const tri = new Triangle("Triangle",15,10,3,2)
// console.log(tri.Area())


// class Circle extends Shape{
//     constructor(name,height,){
//     super(name,height)
//     this.radius = height/2
    
// }
// Area(){
//     let area = 3.14*Math.pow(this.radius,2) 
//     return `Given a ${this.name} with a radius of ${this.radius} we multiply by pie(π)r2, and get an area of ${area}`
// }
// }

// const crc = new Circle("Circle",24)
// console.log(crc.Area())





// class elevator{
//     constructor(floorNumber,isItMoving,isItOccupied){
//        this.floorNumber = floorNumber
//        this.isItMoving = isItMoving
//        this.isItOccupied = isItOccupied
//     }
//     currentFloor(){
//         return `The current floor number is ${this.floorNumber}`
//     }
//     }
// let level = new elevator(10,"Yes","No")
// console.log(level)

class dog{
    constructor(name,type,age){
    this.name = name
    this.type = type
    this.age = age
}
}


class cat{
    constructor(name,type,age){
    this.name = name
    this.type = type
    this.age = age
}
}


class bird{
    constructor(name,type,age){
    this.name = name
    this.type = type
    this.age = age
}
}

const mydog = new dog("Jake","Golden Retriver",10)
const mycat = new cat("Tom","RagDoll",7)
const mybird = new bird("Peet","Crow",2)
console.log(mydog)
console.log(mycat)
console.log(mybird)

