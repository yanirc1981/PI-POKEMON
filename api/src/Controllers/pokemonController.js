const axios = require('axios');
const {Pokemon, Type} = require('../db');


//  DATOS DE LA API 
const getApiInfo = async () => {
  const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then((data) => {
      return data.data.results;
    })
    .then((data) => {
      return Promise.all(data.map((res) => axios.get(res.url))); // ENTRA A CADA ELEMENTO Y HACE UN GET A SU URL
    })
    .then((data) => {
      return data.map((res) => res.data); // SE GUARDAN EN RESP.
    });
  let arrayPoke = resp.map((result) => {  //TRAIGO TODAS LAS PROPIEDADES  DE CADA POKEMON.
    return {
      id: result.id,
      name: result.name.toLowerCase(),
      life: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
      defense: result.stats[2].base_stat,
      speed: result.stats[3].base_stat,
      height: result.height,
      weight: result.weight,
      types: result.types.map((t) => t.type.name), 
      image: result.sprites.other.dream_world.front_default,
    };
  });

  console.log(arrayPoke);
  return arrayPoke;
  
};

 // DB
 const getDbInfo = async () => {
  try{
    const results = await Pokemon.findAll({ 
        include:{
            model: Type,
            attributes: ['name'],
            through:{
                attributes: [],
            }
        }
    })
    return results;
}catch (err){
    console.log(err);
}
} 

//UNIMOS TODO
const getAllPokemons = async () => { 
  const apiInfo = await getApiInfo(); 
  const dbInfo = await getDbInfo();   
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};






module.exports = {getAllPokemons, getApiInfo, getDbInfo};






//getApiInfo();
//module.exports={getApiInfo};

/*
const getAll =  async(req, res, next) =>{
  
  try {
      const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')//20 pokemons
      const apiNext =await axios.get(apiUrl.data.next)//traemos 20 mas
      const pokemonsApi = [...apiUrl.data.results,...apiNext.data.results]//unimos los dos llamados trae 40

      Promise.all(pokemonsApi).then((results)=>{
        pokeData = results.map((data)=>({
          id:data.id,
          name:data.name,
          type:data.types,//mapearlo
          image: data.image,   //sprites.other.dream_world.front_default,
          wigth: data.wigth,
          height:data.height,
        }))
      })
    res.send(pokemonsApi)
  } catch (error) {
      res.send(error)
  }

}



//et pokemonsApi=[];
//let pokeData = {};

//function getAll(){
//  for(let i = 0; i < 41; i++){
  //  let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //pokemonsApi.push(url[i]).then(res=>res.json());
  //}
  
*/







/*
 const getAll =  async(req, res, next) =>{
    try {
        const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')//20 pokemons
        const apiNext =await axios.get(apiUrl.data.next)//traemos 20 mas
        const pokemonsApi = [...apiUrl.data.results,...apiNext.data.results]//unimos los dos llamados trae 40
  
       
        
      
      res.send(pokemonsApi)
    } catch (error) {
        res.send(error)
    }
  
  }
  */
//module.exports ={
  //  getAll,
//};