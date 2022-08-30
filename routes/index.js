var express = require('express');
var router = express.Router();
var IndexController = require("../controllers/IndexController")
router.get('/', (req, res)=>IndexController.getHome(req,res))
router.get('/foods', (req, res)=>IndexController.getFoods(req,res))
router.get('/login', (req, res)=>IndexController.getLogin(req,res))
router.get('/register', (req, res)=>IndexController.getRegister(req,res))

module.exports = router;
