// 1.   Create an athlete for a celebrity and save it to a variable
    const celebrity = {}
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
celebrity.name = "Jordan"
celebrity.age = 19
celebrity.race = "African American"
// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celebrity['talents'] = 'Too many to list'
celebrity['likes'] = 'Pizza and Gaming'
celebrity['dislikes'] = 'disliking things'
// 4.   Write a function that allows us to add or update 3 properties
function changeAupdate(obj, key, value){
    obj[key] = value
}
changeAupdate(celebrity, 'likes', 'tacos and Anime' )
changeAupdate(celebrity, ' dislikes', 'Watermelon')
changeAupdate(celebrity, 'talents', 'Good at acting')
// 5.   Using a loop - log all the celebrities properties to the console

for(let key in celebrity){
    //celebrity[key] = "Fake"
    console.log(celebrity[key])
}

console.log(celebrity)

