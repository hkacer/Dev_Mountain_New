const express= require('express')
const cors=require('cors')
const {getMovies,deleteMovie,updateMovie,createMovie}=require('./controller.js')
const app=express()

app.use(express.json())
app.use(cors())

app.get('/api/movies', getMovies)
app.delete('/api/movies/:id',deleteMovie)
app.put('/api/movies/:id', updateMovie)
app.post('/api/movies',createMovie)


app.listen(4004, ()=> console.log('Listening on port 4004...'))