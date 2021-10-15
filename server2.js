const mongoose = require('mongoose');
const express = require('express');
const server = express();
const User = require('./models/User');

require('dotenv').config({ path: 'variables.env' });

server.get('/',(req,res)=>{
    const newUser = new User();

    newUser.email = "matt1235@daum.net";
    newUser.name = "Jungsu";
    newUser.age = 24;

    newUser.save().then((user)=>{
        console.log(user);
        res.json({
            message: 'User Created Successfully'
        })
    })
    .catch((err)=>{
        res.json({
            message: err.toString()
        })
    })
})

server.listen(3000,(err)=>{
    if(err){
        return console.log(err);
    }
    else{
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err)=> {
            if(err){
                console.log(err);
            }else{
                console.log('Connected to database successfully!');
            }
        });
    }
});
