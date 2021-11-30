// const h1 = document.body.querySelector('h1')
// console.log(h1)

// document.addEventListener("click", (event) => {
//     console.log(event)
// })

// const div = document.body.querySelector('div')

// div.addEventListener("click", (e) =>{
//     const el = e.target
//     console.log(el.style.backgroundColor)
//     const color = el.style.backgroundColor
//     if(color === 'red'){
//         el.style.backgroundColor = "blue"
//     } else if( color === 'blue'){
//         el.style.backgroundColor = "pink"
//     } else if( color === 'pink'){
//         el.style.backgroundColor = "red"
//     }
    
// })


// let dynamicH1 = document.querySelector('.dynamicH1');
// let clicked = true;

// document.addEventListener("click", (e) => {
//     if(e.target === dynamicH1 && clicked){
//         dynamicH1.style.backgroundColor = "purple";       
//         dynamicH1.style.color = "teal";   
//         clicked = false;    
//     } else if(e.target === dynamicH1 && !clicked){
//         dynamicH1.style.backgroundColor = "teal";       
//         dynamicH1.style.color = "purple";
//         clicked = true;       
//     }
// })

const div = document.querySelector('div')

div.addEventListener("click",(e) => {
    document.body.style.backgroundColor = "red"
})
