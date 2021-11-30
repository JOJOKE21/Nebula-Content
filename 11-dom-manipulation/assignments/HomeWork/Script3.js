// const box = document.createElement('h1')
// document.body.appendChild(box);
// box.innerText = "Jordan To Do List";
// let input = document.createElement('input');
// input.innerText = "Enter Text"
// document.body.appendChild(input);
// let addbtn = document.createElement('button');
// addbtn.innerText = "add"
// document.body.appendChild(addbtn);
// addbtn.addEventListener("click",add)

// let myList = document.getElementsByTagName("li");
// let i;
// for(i = 0; i < myList.length; i++){
//     let item = document.createElement("span");
//     let text = document.createTextNode("\u00D7");
//     item.className = "close";
//     item.appendChild(text);
//     myList[i].appendChild(item);
// }

// const close = document.getElementsByClassName("close");
// let i;
// for(i = 0; i < close.length; i++){
//     close[i].onclick = function(){
//         const div = this.parentElement;
//         div.style.display = 'none';
//     }
// }

// const check = document.querySelector('ul');
// check.addEventListener('click',function(ev){
// if(ev.target.tagName === "li"){
//     ev.target.classlist.toggle('checked');
// }
// }, false);


// function newElement() {
//     const li = document.createElement("li");
//     const inputValue = document.getElementsByName(input).value;
//     const t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if(inputValue === ''){
//         alert("You must write something!");
//     } else{
//         document.getElementsByName('li').appendChild(li);
//     }
// document.getElementsByName(input).value = "";
// let span = document.createElement("span");
// let text = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(text);
// li.appendChild(span);

// for(i = 0; i < close.length; i++){
//     close[i].onclick = function() {
//         const div = this.parentElement;
//         div.style.display = 'none';
//     }
// }

// }

const myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}


const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}