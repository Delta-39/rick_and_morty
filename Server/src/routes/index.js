// Importar los controladores
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/logIn')
const {postFav, deleteFav} = require('../controllers/handleFavorites')

// Importar la función Router de express
const { Router } = require('express');

// Crear una instancia de Router
const router = Router();

// Definir las rutas
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

// Exportar el router
module.exports = router;