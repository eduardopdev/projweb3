const Person = require("../models/Person");
const {json} = require("express");
const router = require('express').Router()

//Create Regs
router.post('/', async (req, res) =>{
    const {name, salary, approved} = req.body
    console.log(req.body)
    if(!name) {
        res.status(422).json({error : 'o nome é obrigatório'})
    }
    const person = {
        name,
        salary,
        approved
    }
    try{
        await Person.create(person)
        res.status(201).json({message : "Pessoa inserida"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/', async (req, res) => {
  try{
      const people = await Person.find()
      res.status(200).json(people)
  } catch (error) {
      res.status(500).json({error : error})
  }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const person = await Person.findOne({_id : id})

        if(!person){
            res.status(400).json({message : "user not found"})
        }

        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error : error})
    }
})

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
            res.status(422).json({message : "could not do updates"})
        }

        res.status(200).json(updatedPerson)
    } catch (error) {
        res.status(500).json({error : error})
    }
})

router.delete('/', async (req, res) => {
    const id = req.body.id
    try{
        const person = await Person.findOne({_id : id})
        if(!person){
            res.status(422).json({message : "could not delete"})
            return
        }

        const deletedPerson = await Person.deleteOne({_id: id})
        if(!deletedPerson){
            res.status(422).json({message : "person was not deleted"})
        }
        res.status(200).json(deletedPerson)
    } catch (error) {
        res.status(500).json({error : error})
    }
})


module.exports = router