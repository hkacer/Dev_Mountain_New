const express= require('express')
const cors=require('cors')

const app= express()

app.use(cors()) //middle ware objects 
app.use(express.json())

let inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory',(req,res) => {
    // console.log('req:',req,'-------','res:',res)
    if(req.query.item){
      //console.log(req.query.item)
      const filterItems= inventory.filter((invItem)=>invItem.toLowerCase().includes(req.query.item.toLowerCase()))
      res.status(200).send(filterItems)
      
    }else{
      res.status(200).send(inventory)
    }
})


// app.get('/api/inventory', (req,res)=>{
//   //console.log('req',req,'-------','res',res)
  
  
 
// })

app.get('/api/inventory/:id',(req,res)=>{

//console.log(req.params.id)
res.status(200).send(inventory[+req.params.id])


})
app.listen(5050, ()=>console.log('server jammin on port 5050'))