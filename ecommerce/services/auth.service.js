const {User} = require('../models/index');
const bcrypt=require('bcryptjs');


// var jwt = require('jsonwebtoken');

//generate token
// var token =jwt.sign({ email:'s4satishkumar@gmail.com', password:'s4satishkumar'}, 'my-secret-key');
// console.log(token);

// //verify token 
// const decoded =jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InM0c2F0aXNoa3VtYXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJzNHNhdGlzaGt1bWFyIiwiaWF0IjoxNjYzNzY3MzU2fQ.YFxUYWoDdc2fmVZj4zO2JX_PnXfM_qwqcDL-PxWUezc','my-secret-key' );
// console.log(decoded);

const signup = (data) =>{
    const response = User.create({
        username: data.username,
        email: data.email,
        password: data.password,
    })
    return response;
}


const getUserByEmail = (data)=>{
    const response=User.findOne({
        where:{
            email:data
        }
    });
    return response;
}

const verifyPassword =(password,hashedPassword)=>{
    return bcrypt.compareSync(password,hashedPassword);
}
module.exports = {signup,getUserByEmail,verifyPassword };