import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
})

const adminModel = mongoose.model('adminUsers', adminSchema);

export default adminModel