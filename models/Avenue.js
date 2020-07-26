const db = require("./db")
const { sequelize } = require("./db")

const Avenue = db.sequelize.define("Avenues",{

    name: {
        type: db.Sequelize.STRING
    },
    avenueExtension:{
        type: db.Sequelize.FLOAT
    },
    bikePath:{
        type: db.Sequelize.TINYINT
    },
    bikePathExtension:{
        type: db.Sequelize.FLOAT
    },
    bikePathPercentage:{
        type: db.Sequelize.FLOAT
    }


})
module.exports = Avenue

//Already created Avenue.sync({force:true})