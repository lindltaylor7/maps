import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const User =  sequelize.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    birthDate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    convertionDate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    baptized:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude:{
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false
    },
    longitude:{
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false
    },
    counseling:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    visit:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    membership:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: true
})