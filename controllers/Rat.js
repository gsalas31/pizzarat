const Rat = require('../models/Rat.js')
const Pizza = require ('../models/Pizza.js')


//INDEX get all the rats with their pizza

const index= async( req, res)=>{
    try{
        //get array of rats with pizza ids
        const allRats= await Rat.find({})

        //create a new array of rats with their pizza info
        // everytime map loops will get info an return new info 
        const rats= allRats.map(async (rat) => {
            const thePizza = await Pizza.findById(rat.pizza)
                return {
                    //creating an obeject with the name of rat 
                    // map will returns following object
                    //this is just to show the id of each rat
                    _id: rat._id,
                    name: rat.name,
                    pizza: thePizza
                }
            }) 
            //we added this part beacuse we were not getting or object back 
            const rats2=await Promise.all(rats)
            await res.status(200).json(rats2) 
        }
    catch(error){
        res.status(400).send(error)
    }
}


//CREATE
const create= async( req, res)=>{
    try{
        const newRat=await Rat.create(req.body);
        res.status(200).json(newRat);
    }
    catch(error){
        res.status(400).send(error)
    }
}


//UPDATE
const update = async (req, res) => {
    try{
        const updatedRat = await Rat.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedRat)
    }
    catch(error){
        res.status(400).send(error)
    }
}

//DESTROY
const destroy = async (req, res) => {
    try{
        const deletedRat = await Rat.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedRat)
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports = {
    index,
    create,
    update,
    destroy
}
