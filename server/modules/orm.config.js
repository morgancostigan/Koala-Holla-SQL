const Sequelize = require('sequelize');
const connectionString = 'postgres://localhost:5432/koala_holla';

const sequelize = new Sequelize(connectionString, {operatorsAliases: false});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to database', err);
    })

    module.exports = sequelize;