const Sequelize = require("sequelize")
  //conexão com o banco de dados MySql
const sequelize = new Sequelize ("HuAvenues","root","Dasdm1994",{
    host: "localhost",
    dialect:"mysql"
    })

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }