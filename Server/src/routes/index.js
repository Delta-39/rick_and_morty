const express = require('../index');
const routerGeneral = express.Router() 
const getCharById = require('../controllers/getCharById');
const handleFavorites = require('../controllers/handleFavorites');
const login = require('../controllers/login')

routerGeneral.get('/character/:id', getCharById)
routerGeneral.get('/login', login)
routerGeneral.post('/fav', handleFavorites.postFav)
routerGeneral.delete('/fav/:id',handleFavorites.deleteFav)

module.exports = routerGeneral