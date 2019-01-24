const Sequelize = require('sequelize');
const sequelize = require('../modules/orm.config');

const config = {
    freezeTableName: true, // don't use plural table names.
    underscored: true, // use snake_case not camelCase for attributes.
}

const Koala = sequelize.define('koala', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ready_to_transfer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    notes: {
        type: Sequelize.STRING,
    }
}, config)

module.exports = Koala;