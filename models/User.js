const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    // set up a method to run on instance data (per user) to check password; you will be using bcrypt package for this
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
         username: {
             type: DataTypes.STRING,
             allowNull: false,


            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
        
        
            }
    
    },
     {
        sequelize 
    }
),

module.exports = User;