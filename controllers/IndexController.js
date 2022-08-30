const res = require("express/lib/response")
const foods = require('./foods')
class IndexController {
    static getHome(req, res){
        var users = ["Musa", "Alberto", "Aaron", "Matthew", "Eniola", "Dorcas", "Toheeb"]
        res.render('index', {title: "Pizzeria 🍕", users, foods:[foods[0],foods[1],foods[2],foods[3]], nav:true})
    }
    static getFoods(req, res) {
        res.render('foods', {title: "All Foods🍲", foods, nav:true})
    }
    static getLogin(req,res) {
        res.render('login', {title: "Login", nav: false})
    }
    static getRegister(req,res) {
        res.render('register', {title: "Register", nav: false})
    }
}

module.exports = IndexController
