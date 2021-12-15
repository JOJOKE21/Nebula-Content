const newElement = document.createElement('h1');
document.body.appendChild(newElement);
newElement.innerText = "This is Text";
newElement.style.backgroundColor = "red"
newElement.style.flexFlow;
newElement.style.fontSize ="52px";
newElement.innerText = 0;

let btn = document.createElement('button');
btn.innerText = "Plus One"
document.body.appendChild(btn);

btn.addEventListener('click',plusone)
btn.style.color = "red"
function plusone() {
    newElement.innerHTML = parseInt(newElement.innerHTML) +1;


  }

  let btn2 = document.createElement('button');
btn2.innerText = "Minus One"
document.body.appendChild(btn2);

btn2.addEventListener('click',minusone)
btn.style.color = "purple"

function minusone() {
    newElement.innerHTML = parseInt(newElement.innerHTML) -1;


  }
addEventListener("")


