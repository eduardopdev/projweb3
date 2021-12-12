const Person = require("../models/Person");
const {json} = require("express");
const router = require('express').Router()

//CRUD

//Create Person
router.post('/', async (req, res) =>{
    const {name, salary, approved} = req.body
    console.log(req.body)
    if(!name) {
        res.status(422).json({error : 'Nome obrigatorio!'})
    }
    const person = {
        name,
        salary,
        approved
    }
    try {
        await Person.create(person)
        res.status(201).json({message : "Usuario inserido!"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Get All Persons
router.get('/', async (req, res) => {
  try{
      const people = await Person.find()
      res.status(200).json(people)
  } catch (error) {
      res.status(500).json({error : error})
  }
})

//Update Person
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const updateData = {}
    for (const attr in req.body){
        updateData[attr] = req.body[attr]
    }
    try{
        console.log(updateData)
        const updatedPerson = await Person.updateOne({_id : id}, { $set : updateData})

        if(updatedPerson.matchedCount === 0){
            res.status(422).json({message : "Usuario nao encontrado!"})
        }

        res.status(200).json(updatedPerson)
    } catch (error) {
        res.status(500).json({error : error})
    }
})

//Delete Person
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const person = await Person.findOne({_id : id})
        if(!person){
            res.status(422).json({message : "Impossível deletar"})
            return
        }

        const deletedPerson = await Person.deleteOne({_id: id})
        if(!deletedPerson){
            res.status(422).json({message : "Nao foi possivel deletar o usuario."})
        }
        res.status(200).json(deletedPerson)
    } catch (error) {
        res.status(500).json({error : error})
    }
})


module.exports = router