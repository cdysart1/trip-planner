const db = require('./db');


var Hotel = db.define("hotel", {
    name: {
        type:Sequelize.STRING
    },
    num_stars:{
        type:Sequelize.FLOAT(0,5)
    },
    amenities:{
        type:Sequelize.STRING
    }
});

db.sync();

modules.export = Hotel;
