import express from "express";
const router = express.Router();

router.get('/', function(req, res){
    res.send('bienvenido desde rutas user');
});

router.route('/')
    .get(function(req, res){
        res.json({msg: "respuesta por metodo GET"});
    })
    .post(function(req, res){
        res.json({msg: "respuesta metodo post"});
    });

export default router;