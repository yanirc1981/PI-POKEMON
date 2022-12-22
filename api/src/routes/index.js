const { Router } = require('express');
const PokemonRouter = require('./PokemonRouter.js'); //
const TypeRouter= require('./TypeRouter.js');//

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 
const router = Router(); // crea un enrutador

router.use('/pokemon', PokemonRouter);
router.use('/type', TypeRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

