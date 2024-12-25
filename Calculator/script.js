
movetodark = ()=>{
  let bodyEle = document.querySelector("body")
  bodyEle.style.backgroundColor = "black"
  bodyEle.style.color = "white"

  let lightEle = document.getElementById("light");
  lightEle.classList.add("no-display")
  
  let darkEle = document.getElementById("dark");
  darkEle.classList.remove("no-display")
}
movetolight = ()=>{
  let bodyEle = document.querySelector("body")
  bodyEle.style.backgroundColor = "white"
  bodyEle.style.color = "black"

  let lightEle = document.getElementById("light");
  lightEle.classList.remove("no-display")
  
  let darkEle = document.getElementById("dark");
  darkEle.classList.add("no-display")
}

let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string ="";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click',(e) => {
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = "";
      input.value =string;
    }
    else if(e.target.innerHTML == 'DEL'){
         string = string.substring(0,string.length-1);
         input.value = string;
    }
    else {
    string += e.target.innerHTML;
    input.value = string;
    }
  })
})