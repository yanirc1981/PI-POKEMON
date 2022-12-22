require ('dotenv').config();
const  axios  = require('axios');
const {Router} = require('express');
const {getAllPokemons,getDbInfo,getApiInfo} = require('../Controllers/pokemonController');
const router = Router();
const {Pokemon, Type} = require('../db')

router.get('/', async (req, res) => {
    
    let {name} = req.query;
    const myPokes= await getAllPokemons()
    try {
        if(name) {
            const pokeName = myPokes.filter(p=>p.name.toLowerCase() === name.toLowerCase())
            if(pokeName.length){
                return res.status(200).json(pokeName)
                
            }
            return res.status(404).send(`"${name}" no encontrado`)
        }
        res.status(200).send(myPokes)
        }catch(error) {
            res.status(400).send(error.message)

    }

})


/*
router.get('/', async (req, res) => {
    
    let {name} = req.query;
    const myPokes= await getAllPokemons()
    try {
        if(name) {
            const pokeName = myPokes.filter(p=>p.name.toLowerCase()===name.toLowerCase())
            if(pokeName){
                return res.status(200).json(pokeName);
            }
            return res.status(404).send('No se encontro el Name')
     
        } else {
            const allPokes = await getAllPokemons();
            return res.status(200).json(allPokes)
        }
    } catch (error) {
        res.status(404).send('Error')
    }
})

*/

router.get('/pokemons/:id', async (req, res)=>{
    try{
    const id = req.params.id
    const allPokes = await getAllPokemons()
        if(id){
            const filteredPoke = allPokes.find(p =>p.id == id)
            // console.log(filteredPoke)
            if(filteredPoke){return res.json(filteredPoke)}
            return res.status(404).send('"id" no encontrado')
        }
        
    }catch(error){
       // console.log(error)
       res.status(400).send(error.message)
    }
})





/*
router.get('/:id', async (req, res, next)=>{
    
        const {id} = req.params;
        
        if(id){
           if(id.includes("-")){
            const pokemonsDb = await Pokemon.findOne({
                where: {id},
                includes:[Type]
    
            })
            res.status(200).json(pokemonsDb)
           } 
            const pokemonId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            res.status(200).json(pokemonId.data)
           
           
           
        }   else{

            res.status(400).send("No se encontro el pokemon")
        }
        
  
});
*/
router.post('/', async (req, res, next)=>{
    try {
        const {name, image,life, type, attack, defense, speed, height, wheight} = req.body
        let newPokemon = await Pokemon.create({name, image, life, type, attack, defense, speed, height, wheight})
        if(!name){return res.json({info: "Name obligatorio"})}

        let typeDb = await Type.findAll({where :{name:type}})
        newPokemon.addType(typeDb)
        res.status(200).send("Pokemon creado con exito")
    } catch (error) {
        res.status(400).send("Error")
    }
});

//PUT
//DELETE




module.exports = router;





/*
router.post('/pokemon',async (req, res) => {
    let{name, image, type, attack, defense} = req.body;
    let createdPoke =await Pokemon.create({name, image, type, attack, defense})
    let typeDb = await Type.findAll({where: {name:type}})
    createdPoke.addType(typeDb)
    res.send('Pokemon creado con exito')
});
*/






//traer todos los pokemons
//llamado a la API
//ver que necesito traer
//llamado async a la Db
//combinar resultados
//validar que existan
//router.get("/getAll", async(req,res)=>{
  






//POST----------------------------------------------------------------
//crear un pokemon
//recibir datos y separarlos, validar
//agregar a base de datos
//router.post('/create',(req,res)=>{

//});

//GET Obtener un pokemon por id
//recibo id por parametro, 


//PUT----------------------------------------------------------------

//DELETE----------------------------------------------------------------

