import express from "express";
const router = express.Router();

router.get('/login', function(req, res){
    res.render('auth/login');
});

router.route('/')
    .get(function(req, res){
        res.json({msg: "respuesta por metodo GET"});
    })
    .post(function(req, res){
        res.json({msg: "respuesta metodo post"});
    });

export default router;