const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const pug = require('pug');
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(session({
   secret: 'neka tajna sifra',
   resave: true,
   saveUninitialized: true
}));
const sequelize = require('./baza.js');
const Imenik = require('./korisnik.js')(sequelize);
Imenik.sync();
app.use(express.static(__dirname));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.post("/upis",(req, res) => {
  
  unos(req.body['ime_prezime'],req.body['ime_prezime'],req.body['adresa'],req.body['broj_telefona']).then(()=>{res.send('Unesen')})
  });
  
app.get('/unos',function(req,res){
  res.sendFile(__dirname+"/unos.html");
})

app.get('/poznanik/:kontakt',function(req,res){
  var tzu=req.params.kontakt;
  connection.query('SELECT *FROM imenik WHERE id=ANY(SELECT idPoznanik FROM adresar WHERE idKontakta=?);',[tzu], function (error, results, fields) {
    if (error) 
    {
     console.log("flakdjgladčg");
    throw error;
    }/*var k=""
    for(var i=0;i<results.length;i++)
    {
        k+="<p>";
        k+=results[i].ime_prezime;
        k+=" ";
        k+=results[i].adresa;
        k+=" ";
        k+=results[i].broj_telefona;
        k+=" ";
        k+="</p><button></button>";
    }*/
    res.render("tablea", {
      results: results
  });
  });
});
app.get('/imenik',function(req,res){
  moj().then(results=>{res.render("tablea", {
    results: results
});})
        
     
});
app.listen(3000);
async function moj()
{
  const users = await Imenik.findAll();
  return users;
} 
async function unos(a,b,c,d)
{
   await Imenik.create({ ime: a, prezime: b,adresa:c,brojTelefona:d });
}

