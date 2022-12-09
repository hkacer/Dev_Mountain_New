let baseURL= 'https://swapi.dev/api/'
axios
.get(`${baseURL}/people`)
.then(data=>{
  console.log(data.data.results)
})
.chatch(err=>)