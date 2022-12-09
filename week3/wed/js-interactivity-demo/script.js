let count = 0;
//get DOM element
let counter = document.querySelector("#counter");
let plusbtn = document.querySelector("#plus-btn");
let minusbtn=document.querySelector('#minus-btn')
let resebtn=document.querySelector('#reset-btn')


const increment = () => {
  count++;

  counter.textContent = count;                                                                            
  console.log(count);
};

const decrement=()=>{
  count--;
  counter.textContent=count;
  console.log(count);

}
const res=()=>{
  count= 0;
  counter.textContent=count;
  console.log(count)
}

plusbtn.addEventListener("click", increment);
minusbtn.addEventListener('click', decrement)
resebtn.addEventListener('click', res)




//this is how we do it without repeating 
const buttons=document.querySelectorAll('.theme-buttons')
console.log(buttons)


for(let i=0; i<buttons.length;i++){
  buttons[i].addEventListener('click', selectThemes)
}


function selectThemes(event){
  const theme=event.target.textContent;
  console.log(theme);

  document.querySelector('body').className=theme;
  document.querySelector('main').className=theme;
  
  const buttons=document.querySelectorAll('button');
  for(let i=0; i<buttons.length; i++){
    buttons[i].className=theme;
  }
  
}



