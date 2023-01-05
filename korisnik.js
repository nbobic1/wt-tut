const Sequelize = require("sequelize");
const sequelize = require("./baza.js");
 
module.exports = function (sequelize, DataTypes) {
    const Imenik = sequelize.define('Imenik', {
        id1:Sequelize.INTEGER,
       ime: Sequelize.STRING,
       prezime: Sequelize.STRING,
       adresa: Sequelize.STRING,
       brojTelefona: Sequelize.STRING
   });
   return Imenik;
}
