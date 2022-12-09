const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn=document.getElementById('fortuneButton')

const  creationForm=document.getElementById('creation-form')
const nameInput=document.getElementById('name-input')
const powerLevelInput=document.getElementById('p-level-input')

const deleteForm=document.getElementById('delete-form')
const deleteIdInput=document.getElementById('delete-id-input')

const incForm=document.getElementById('inc-form')
const incIdInput=document.getElementById('editInput')
const editIndex=document.getElementById('editIndex')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune=()=>{
    axios.get("http://localhost:4000/api/compliment/")
    .then(res=>{
        const data=res.data;
        alert(data);
    })
}
const createPerson=(event)=>{
    event.preventDefault()
    const myObj={
        name: nameInput.value,
        powerLevel: powerLevelInput.value,
    
    }
    axios.post('http://localhost:4000/api/create/',myObj)
    .then(res=>{
        let data=res.data
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })


    nameInput.value=''
    powerLevelInput.value=''

}

const deletePerson=(event)=>{

    event.preventDefault()

    deleteId=deleteIdInput.value
    axios.delete("http://localhost:4000/api/delete/"+ deleteId)
    .then((res)=>{
        let data=res.data
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function incPowerLevel(event){
    event.preventDefault()
    let myObj={
        level: incIdInput.value
    }

    axios.put(`http://localhost:4000/api/increment/${editIndex.value}`,myObj)
    .then((res)=>{
        let data=res.data
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)

creationForm.addEventListener('submit',createPerson)

deleteForm.addEventListener('submit',deletePerson)

incForm.addEventListener('submit',incPowerLevel)
