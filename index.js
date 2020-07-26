const express = require ("express");
const app = express();
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser = require("body-parser")
const Avenue = require ("./models/Avenue")



app.use(express.static("public"));
//config
    //template Engine
    app.engine('handlebars', expressHandlebars({
        handlebars: allowInsecurePrototypeAccess(Handlebars)
  }));
    app.set("view engine", "handlebars")

    //Body Parser
    app.use (bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

//Routes
    app.get("/", function(req, res){
        Avenue.findAll().then(function(avenues){
            console.log(avenues)
            res.render("home", {avenues: avenues})
        })
     })

 
    app.post("/", function(req, res){
        Avenue.create({
            name: req.body.avenue,
            avenueExtension: req.body.avenueExtension,
            bikePath: req.body.bikePath,
            bikePathExtension: req.body.bikePathExtension,
            bikePathPercentage: req.body.bikePathPercentage
        }).then(function(){
            res.redirect("/")
        }).catch(function(erro){
            res.send("Houve um erro: "+ erro)
        })


    app.get('/deletar/:id', function(req, res){
        Avenue.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect("/")

        }).catch(function(erro){
            res.send("Esta avenida não existe!")

        })
    })

    })


app.listen(8081, function(){
    console.log("Servidor rodando na url");
});