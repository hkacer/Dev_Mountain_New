const database=[]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune:(req,res)=>{
        const fortunes=['hey you', 'no worries', 'you are close']

        let randomIndex=Math.floor(Math.random()*fortunes.length);
        let randomFortune=fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },
    createPerson:(req,res)=>{
        const name= req.body.name
        const powerLevel=req.body.powerLevel

        //find nex available id
        let findId=0
        for(let i=0; i<database.length; i++){
            if(database[i].id>findId){
                findId=database[i].id
            }
        }
        findId++

       let  newPerson={
        name,
        powerLevel: +powerLevel,
        id: findId,

        }


        database.push(newPerson)
        console.log(database)
        res.status(200).send(database)

    },
    deletePerson:(req,res)=>{
        let id= +req.params.id
        
        for(let i=0; i<database.length; i++){
            if(database[i].id===id){
                database.splice(i,1)
            }
        }
       
        res.status(200).send(database)
    },
    incrementPowerLevel:(req,res)=>{
        let index= +req.params.id
       
        let {level}=req.body
        database.splice(index,1,level)
        
        console.log(database)
        res.status(200).send(database)
    }
}