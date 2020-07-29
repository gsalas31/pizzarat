const express = require ("express")
const RatRouter= express.Router()
const {index, create, update, destroy}= require('../controllers/Rat.js')

//get all rats
RatRouter.get("/", index)

//create New rats
RatRouter.post("/", create)

//Update a rat
RatRouter.put("/:id", update)

//Destroy a Rat
RatRouter.delete("/:id", destroy)


module.exports = RatRouter