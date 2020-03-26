const express = require('express');

const OngController =  require('./controllers/OngController');
const InsidentController =  require('./controllers/InsidentController');
const ProfileController =  require('./controllers/ProfileController');
const SessionController =  require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
/**
 * Rotas ONGS
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
/**
 * Rotas Incidents
 */
routes.get('/incidents', InsidentController.index);
routes.post('/incidents', InsidentController.create);
routes.delete('/incidents/:id', InsidentController.delete);

routes.get('/profile', ProfileController.index);



module.exports = routes;