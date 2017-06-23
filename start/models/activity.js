const db = require('./db');

var Activity = db.define("activity", {
    name:{
        type:Sequelize.STRING
    },
    age_range:{
        type:Sequelize.STRING
    }
});

db.sync();

modules.export = Activity;