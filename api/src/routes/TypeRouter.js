require ('dotenv').config();
const axios = require('axios');
const { Router } = require ("express");
const {Type} = require('../db')
const {getType} = require('../Controllers/typeCotroller')


const router = Router();


//GET----------------------------------------------------------------
router.get('/', async (req, res)=>{
  await getType();
  try{
  const types = await Type.findAll();
   res.send(types.map(t=>{
      return {
          id:t.id,
          name:t.name
      }
  }))
  }catch(error){
    console.log(error)
  }
})



module.exports = router;