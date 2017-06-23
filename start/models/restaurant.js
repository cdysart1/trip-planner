const db = require('./db');

var Restaurant = db.define("restaurant",{
    name:{
        type:Sequelize.STRING
    },
    cuisine:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.INTEGER,
        validate:{
            max:5,
            min:1
        }
    }
});

db.sync();

modules.export = Restaurant;