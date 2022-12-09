const express=require('express')
const cors=require('cors')

const app=express()

app.use(cors())
app.use(express.json())

const{createMessage}=require('./controllers/controller')

app.post('/api/messages', createMessage)

app.listen(4004, ()=> console.log('running on 4004'))