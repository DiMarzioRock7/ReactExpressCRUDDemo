let sequelize = require('../controller/db');
const Sequelize = require('Sequelize');

/**
 * Define 'userslist'
 * Including two columns: 'id', 'name'
 */
let User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: { type: Sequelize.STRING }
}, {
    freezeTableName: true,
    timestamps: false
});

/**
 * Real Application
 */
exports.findAllUser = function() {
    return User.findAll()
};

exports.createUser = function(name) {

    return User.create({
        name: name
    })
};

exports.updateUser = function(jsonObj) {

    User.update({name: jsonObj.name}, {where: {id: jsonObj.id}});
    return User.findAll()
};

exports.deleteUser = function(id) {

    User.destroy({where: {id: id}});
    return User.findAll()
};

