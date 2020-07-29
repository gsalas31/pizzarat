const Pizza = require("../models/Pizza.js")

//index - gets all pizza/async will help use await keyword: next to the keyword will be a promise and until promise is not fulfilled it wont continue. If the promise is fullfilled the info will be passed / DOWN side you dont get an error alert 
// for that reason we use try -- catch error
// benefit more easy to read 

const index = async (req, res)=>{
    try {
        // empty brackets retriving information/get pizzas
    const allPizza=await Pizza.find({});
    //sendding back as a json 
    //allPizza it will only exist within curly bracket/ block of code 
    // setting the code to 200 / if everything went well 
    //use the cats website for a better understanding
    res.status(200).json(allPizza)
}
catch(error){
    //it will send the error to the front so you dont have to go to the back 
    res.status(400).send(error)
}
};

//CREATE route / makes a new pizza 
//async await only work within a function for now 

const create = async (req, res) =>{
    try{
        //after we info from previous pizza , it will create a new pizza with the information acquired 
        // await does not return error and thats why we use catch 
        //console.log(req.body)
        const newPizza = await Pizza.create(req.body)
        //console.log(newPizza)
        res.status(200).json(newPizza)
    }
    catch (error){
        res.status(400).send(error)
    }
}

//UPDATE ROUTE /updates the pizza/ update function does not return the updated object, it resturns the original 
// for that reason we use  new:true saved on updatePizza 
//req.body : create the body of the request 

const update = async (req, res) => {
    try{
        const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedPizza)
    }
    catch(error){
        res.status(400).send(error)
    }
}

//DESTROY : we dont use delete because is a reserved word/ deletes pizza

const destroy = async (req, res) => {
    try{
        const deletePizza = await Pizza.findByIdAndDelete(req.params.id);
        res.status(200).json(deletePizza);
    }
    catch(error){
        res.status(400).send(error)
    }
};


// Exporting everything at once 

module.exports={
    index,
    create,
    update,
    destroy
}