const db = require('./db');

const Place = require("./place");
const Hotel = require("./hotel");
const Restaurant = require("./restaurant");
const Activity = require("./activity");



Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

db.sync();

module.exports = {
    db:db,
    Place:Place,
    Hotel:Hotel,
    Restaurant:Restaurant,
    Activity:Activity
};
