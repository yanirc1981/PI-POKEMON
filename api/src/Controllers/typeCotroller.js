const axios = require('axios');
const { Type} = require('../db');



//TYPE
const getType = async () => {
    try {
      let pokesArr = []; 
      await axios.get('https://pokeapi.co/api/v2/type')
      .then(pokeTypes=>pokeTypes.data.results.map(t=>pokesArr.push({name:t.name})));
      const pokeTypes = await Type.findAll();
      if(pokeTypes.length === 0){
        await Type.bulkCreate(pokesArr)
      }
    } catch (error) {
      console.log(error)
    }
  
    }

    module.exports ={getType}