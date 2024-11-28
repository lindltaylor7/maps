import { User } from "../models/user.model.js";


export const createUser = async(req,res) =>{

    try {
    
    const {address, age, birthDate, convertionDate, counseling, latitude, longitude, membership ,name, visit, baptized} = req.body;

    const savedUser = await User.create({
        address,
        age,
        birthDate,
        convertionDate,
        counseling,
        latitude,
        longitude,
        membership,
        name,
        visit,
        baptized
    })
        res.json(savedUser)

    } catch (error) {
        return res.status(500).json(error)
    }

}