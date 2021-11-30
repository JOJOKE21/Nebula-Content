
// Q1:  Attach this document to the index.html
const holdH1 = document.querySelector('h1');
console.log(holdH1)
// Q2:  Grab the second element that has the text Hello
//      console.log these elements
const holdp = document.querySelector('p');
console.log(holdp)
// Q3:  Grab and console.log the text in the h1 that says 'Good Afternoon'
const headings = document.querySelectorAll("h1")
console.log(headings[2])
// Q4:  Grab the h1 with the text that says "Catch me if you can" - console.log it.
const getElement = document.getElementsByClassName("catch-me")
console.log(getElement[0])
// Q5:  Grab the span element and change the text to "Got ya"

const span = document.querySelector('span')
span.innerText = "Got ya"
console.log(span)