import express from "express";
const router = express.Router();

router.get('/', function(req, res){
    res.send('bienvenido desde rutas user');
});

export default router;