const orm = require("../config/orm")

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: (newBurger, cb) => {
        orm.create("burgers", newBurger, (res) => {
            cb(res);
        });
    },
    update: (burgerData, criteria, cb) => {
        orm.update("burgers", burgerData, criteria, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;