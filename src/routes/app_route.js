const express = require('express');
const router = express.Router();


const Inicio = require('../controllers/Inicio');
const Foros = require('../controllers/Foros');
const Juegos = require ('../controllers/Juegos');
const Novedades = require ('../controllers/Novedades');
const Iniciar = require ('../controllers/Iniciar');
const Registrarse = require('../controllers/Registrarse');

router.get('/',Inicio.list);

router.get('/foros',Foros.list);

router.get('/juegos',Juegos.list)

router.get('/novedades',Novedades.list)

router.get('/iniciarsesion',Iniciar.list);

router.post('/login',Iniciar.login);

router.get('/cerrarsesion', Iniciar.cerrarsesion);

router.get('/registrarse',Registrarse.list);

router.post('/new-user',Registrarse.newUser);

router.post('/abrirForo',Foros.abrirForo);

router.post('/comentar',Foros.comentar);

module.exports = router;