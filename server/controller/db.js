const Sequelize = require("sequelize");

module.exports = new Sequelize('ntuevaluation', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    },
    query:{ raw:true },
    sync: { force: false },

});