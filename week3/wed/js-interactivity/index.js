console.log('Hello world')

  let message=document.querySelector('#message')
  

const addMovie=(event)=>{
  event.preventDefault();

  let inputField=document.querySelector('input');
  let movie= document.createElement('li')

  
  let movieTitle= document.createElement('span')
 movieTitle.textContent=inputField.value;
  movieTitle.addEventListener('click', crossOffMovie)

  movie.appendChild(movieTitle);
  let deleteBtn=document.createElement('button')
  deleteBtn.textContent='x';
  deleteBtn.addEventListener('click',deleteMovie);
  movie.appendChild(deleteBtn)


  let find= document.querySelector('ul')
  find.appendChild(movie)



}

  let selectForm= document.querySelector('form')
  selectForm.addEventListener('submit', addMovie)
  inputField=" ";


  const deleteMovie=(event)=>{
    event.target.parentNode.remove()

    
    message.textContent=`Movie is deleted`
    
   
    
    revealMessage();

  }

  const crossOffMovie=(event)=>{
    event.target.classList.toggle('checked')
   if(event.target.classList.contains('checked')){
    message.textContent="Movie watched!";

   }else{
    message.textContent='Movie added back!';
   }
   revealMessage();
  }
 


  message.classList.remove('hide')
  const revealMessage=()=>{
    let setTimeout=(revealMessage,1000)
    //message.classList.add('hide')
  }


