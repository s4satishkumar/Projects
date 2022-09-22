const {Role,User} = require('../models/index');
const bcrypt=require('bcryptjs');


var jwt = require('jsonwebtoken');
require('dotenv').config();

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

const verifyToken = (token) =>{
    try{
        const response = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return response;
    }catch(err){
        console.log(err);
    }
}

//unique field for user
//unique field for role
const addRoleToUser = async(userId, roleId) =>{
    try{
        const user = await User.findOne({
            where: {
                id: userId
            }
        });
        const role = await Role.findOne({
            where: {
                id: roleId
            }
        });
        await user.addRole(role);
        return user;
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {signup, getUserByEmail, verifyPassword, verifyToken, addRoleToUser};