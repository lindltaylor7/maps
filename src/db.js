import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("church", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});


export const connectDB = async() =>{
    try {
        await sequelize.authenticate()
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}

