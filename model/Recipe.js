const {Sequelize , DataTypes}  = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:Padfoot@123@localhost:5432/test');

const Recipe = sequelize.define("Recipe", {

    id : {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    title: {
        type :DataTypes.STRING,
        allowNull:false

    },
    instructions : {
        type:DataTypes.TEXT,
        allowNull : false

    }

})


module.exports = Recipe;

