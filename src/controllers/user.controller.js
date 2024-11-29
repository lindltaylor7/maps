import User from "../models/user.model.js";


export const createUser = async(req,res) =>{

    try {
    
    const {address, age, birthDate, convertionDate, counseling, latitude, longitude, membership ,name, visit, baptized} = req.body;

    const newUser = new User({
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
       const savedUser = await newUser.save();
       res.json(savedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getUsers = async(req, res) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteUser = async(req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({msg: 'User not found'})
        }
        res.json({msg: 'User deleted'});
    } catch (error) {
        return res.status(500).json(error)
    }
}