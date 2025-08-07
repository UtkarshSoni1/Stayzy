import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import userModel from "./models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "./controllers/generateToken.js";



const userRegister = async (req, res) => {
  try{
    const {name, email, password} = req.body;
    bcrypt.gensalt(10, async (err, salt) => {
      if(err){
        res.send(err.message);
      }
      bcrypt.hash(password, salt, async(err, hash) => {
        if(err){
        res.send(err.message);
        }
        const user = await userModel.create({
          name,
          email,
          password: hash
        })
      })
    })
    const token =  await generateToken(createdUser);
    res.cookie("token",token);
    req.flash('success', 'Registration successful!');
    return res.send(user);
  }
  catch(err){
    res.send(err.message);
  }
}

const userLogin = async (req, res) => {
    try {
        let {email, password} = req.body;
        let user = await userModel.findOne({email: email});
        if(!user){
            req.flash('error', 'User not found, please register');
            return res.redirect('/users/login');
        }
        await bcrypt.compare(password, user.password, async (err, result) => {
            
            if(err) {
                req.flash('error', 'Email or password incorrect');
                return res.redirect('/users/login');
            }
            if(result){
                const token = generateToken(user);
                res.cookie("token",token);
                req.flash('success', 'Login successful!');
                return res.redirect(`/shop/${user._id}`);
            } else {
                req.flash('error', 'Email or password incorrect');
                return res.redirect('/users/login');
            }
        });
    } catch(err) {
        req.flash('error', 'Login failed: ' + err.message);
        res.redirect('/users/login');
    }
}

export default {userLogin,userRegister};
