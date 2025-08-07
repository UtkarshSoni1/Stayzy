import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import 'dotenv/config';
import userModel from './models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userLogin from './controllers/authControl.js';

dotenv.config();
import connection from './config/mongoose-connection.js';
import user from './models/userModel.js';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// app.set('view engine', 'jsx');
// Example route
app.get('/', (req, res) => {
  res.send("Running Sir");
});

app.post('/signup', userLogin);



// Listen
app.listen(5000, () => console.log(`Server running on port 5000`));