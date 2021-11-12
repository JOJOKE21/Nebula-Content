let horseName = 'JOJO'

let position = Math.floor(Math.random()*5)
console.log(position)
if (position === 1){
    console.log("horseName finished in first place!");
}
if (position === 2){
    console.log("horseName finished in second place!")
    } 
 if (position === 3){
     console.log("horseName finished in third place!")
 } 
if ( position >= 4){
    console.log("horseName did not finish in the top 3.")
}