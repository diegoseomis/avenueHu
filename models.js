const Sequelize = require("sequelize")
const sequelize = new Sequelize ("Avenues", "root","Dasdm1994",{

    host:"localhost",
    dialect:'mysql'
})

const Avenues = sequelize.define("avenues",{
    avenue: {
        type: Sequelize.STRING
    },
    avenueExtension:{
        type: Sequelize.FLOAT
    },
    bikePath:{
        type: Sequelize.BOOLEAN
    },
    bikePathExtension:{
        type: Sequelize.FLOAT
    },
    bikePathPercentage: {
        type: Sequelize.FLOAT
    },

})

// already used Avenues.sync({force: true})