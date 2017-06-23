const db = require('./db');

var Place = db.define("place", {
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
}, {
    validate: {
        function(){
            var latBool = this.location[0] >= 0 && this.location[0] <= 90;
            var longBool = this.location[1] >= 0 && this.location[1] <= 180;
            if (!latBool || !longBool) {
                throw new Error;
            }
        }
    }
})