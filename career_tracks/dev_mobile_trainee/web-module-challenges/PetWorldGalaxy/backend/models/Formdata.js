const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Formdata = sequelize.define(
    'formdata',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        phonenumber: {
            type: DataTypes.STRING(20),
            allowNull: true,
        
        },
        message: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },

    },
    {
        indexes: [
            {
              type: 'FULLTEXT',
              fields: ['name'],
            },
          ],
    },
    );

module.exports = Formdata;