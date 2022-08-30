// const res = require("express/lib/response")
const foods = require('./foods')
    exports.getHome = (req, res) => {
        var users = ["Musa", "Alberto", "Aaron", "Matthew", "Eniola", "Dorcas", "Toheeb"]
        res.render('index', {title: "Pizzeria 🍕", users, foods:[foods[0],foods[1],foods[2],foods[3]], nav:true})
    }
    exports.getFoods = (req, res) =>  {
        res.render('foods', {title: "All Foods🍲", foods, nav:true})
    }
    exports.getLogin = (req,res)  => {
        res.render('login', {title: "Login", nav: false})
    }
    exports.getRegister = (req,res)  => {
        res.render('register', {title: "Register", nav: false})
    }

