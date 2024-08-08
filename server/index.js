import express, { response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AdminModel from "./models/admin.js"; 
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.post("/register", async (req, res) => {
    try{
        const {name, email, username, password} = req.body;
        const PasswordHash = await bcrypt.hash(password, 10);
        const adminUser = new AdminModel({name, email, username, password: PasswordHash});
        await adminUser.save();
        return res.status(201).json({message: "User saved successfully"})
    } catch (error) {
        return res.status(500).json({ error: "Server Error" });
    }
})

app.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await AdminModel.findOne({username: username})
        

        if (!user)  {
            return res.status(401).json({message: "Invalid credentials"});
        } 

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        } 

        const token = jwt.sign(
            { _id: user._id, username: user.username },
            `${SECRET_KEY}`, 
            { expiresIn: '1h' });
        res.header("Authorization", token).send({token});
       
    } catch (error) {
        return res.status(500).json({error: "Server Error"})
    }
})

const jwtVerification = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        return res.status(403).json({ auth: false, message: "No token provided" });
    } else {
        jwt.verify(token, `${SECRET_KEY}`, (err, decoded) => {
            if (err){
                return res.status(500).json({ auth: false, message: "Failed to authenticate token" });
            } else {
                req.userID = decoded.id;
                next();
            }
        })
    }
} 

app.get('/', jwtVerification, (req, res) => {
    res.send('Welcome to the dashboard' + req.username);
});


app.listen(PORT, () => {
    try{
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch {
        console.log(`Server is not running`);
    }
})
    

