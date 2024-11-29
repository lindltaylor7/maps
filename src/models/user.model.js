import mongoose from "mongoose"

const userSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    birthDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    convertionDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    baptized:{
        type: Boolean,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    latitude:{
        type: mongoose.Types.Decimal128,
        required: true
    },
    longitude:{
        type: mongoose.Types.Decimal128,
        required: true
    },
    counseling:{
        type: Boolean,
        required: true
    },
    visit:{
        type: Boolean,
        required: true
    },
    membership:{
        type: Boolean,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('User',userSchema);