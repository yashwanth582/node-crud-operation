const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req, res)=>{
    try{
        const aliens = await Alien.find()
        return res.json(aliens)
    }
    catch(err){
        return res.send('Error'+err)
    }
     
})
router.get('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
       return res.json(alien)
    }
    catch(err){
        return res.send('Error'+err)
    }
     
})

router.post('/', async(req, res)=>{
    console.log(req.body)
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub:req.body.sub
    })
     console.log(alien)
     
    try{
       const a1 = await alien.save()
       console.log(alien)
      return res.json(a1)
        
    }catch(err){
       return res.send('Error'+ err)
         
        
    }
})
router.patch('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        return res.json(a1)
    }
    catch(er){
      return  res.send("error"+ er)
    }
})
router.delete('/:id', async(req, res)=>{
    try{
        let alien = await Alien.deleteOne({_id:req.params.id})
        
        // Alien.deleteOne(
        //     {_id:req.params.id}
        //  )
        
        return res.send(`Alien with id ${req.params.id} removed`)
    }
    catch(er){
      return  res.send("error"+ er)
    }
})
module.exports = router