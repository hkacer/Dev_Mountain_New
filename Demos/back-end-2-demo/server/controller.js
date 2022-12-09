const movies= require('./db.json')
let globalId=11;

module.exports={
  getMovies: (req,res)=>{
    res.status(200).send(movies)
  },
  deleteMovie: (req,res)=> {
    let {id}=req.params;
  let movieIndex=movies.findIndex(elem => elem.id === +id);
  console.log('movie id', id)
  movies.splice(movieIndex,1)
  res.status(200).send(movies)

  },
  updateMovie: (req,res)=>{
    let {id}=req.params;// id 
    let {type}= req.body; // + or -
     let movieIndex= movies.findIndex(elem=> elem.id===+id)

     let movie=movies[movieIndex]
     if(movie.rating===5 && type==='plus'){
      res.status(400).send('Cannot go above 5')
     }else if(movie.rating===0 && type==='minus'){
      res.status(400).send('Cannot go below 0')
     }else if(type==='plus'){
      movie.rating++
      res.status(200).send(movies)
     }else if(type==='minus'){
      movie.rating--
      res.status(200).send(movies)
     }else{
      res.sendStatus(400)
     }

  },
  createMovie: (req,res)=>{
    let {title,rating,imageURL}=req.body;
    

    let newMovie= {
      id:globalId,
      title,
      rating,
      imageURL,
    }
    movies.push(newMovie);
    res.status(200).send(movies)
     globalId++;



  }

}

