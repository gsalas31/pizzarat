const mongoose = require('mongoose')
//will tell specific things you need /following schema
const {Schema, model}= mongoose


const PizzaSchema = new Schema(
    {
    name: String,
    toppings: [String],
    },
    {timeStamps: true}
)

// where is the data going ??? we have to create a variable / pizza orange is the name of the collection doe not have to do anything with pizza Schema or variable 

const Pizza= model('pizza', PizzaSchema)

module.exports = Pizza
