const { default: axios } = require("axios")


console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

// const baseURL = 

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

const baseURL='http://localhost:4000'
     //get all characters                                                                                        
function getAllChar(){

  clearCharacters()                                                                    
  axios.get(`${baseURL}/character`)
  .then(function(response){
    // returns a promise that we are calling response
    //loop over response and call the charatercard on each element on the arry

    for(let i=0; i<response.data.length; i++){
      createCharacterCard(response.data[i])
    }

  })
  
  .catch()
}
getAllBtn.addEventListener('click',getAllChar)

//get a single character
function getOneChar(event){
  clearCharacters()
  // console.log(event.target.id)
  axios.get(`${baseURL}/character/${event.target.id}`)
  .then(res=>{
    console.log(res.data)
    createCharacterCard(res.data)
  })
  .catch(err=>console.log(err))

}
//loop over node-list returned by queryslectorall and add event lstener to all

for(let i=0; i<charBtns.length;i++){
  charBtns[i].addEventListener('click',getOneChar)
}

let body