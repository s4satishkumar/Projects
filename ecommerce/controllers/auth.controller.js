const authService = require('../services/auth.service');

const signup = async(req, res) =>{
    const response = await authService.signup(req.body);
    return res.json({
        message: 'Successfully signed up',
        success: true,
        data: response,
        code: 200,
    })
}

const signin = async(req, res) =>{
    const userData  = await authService.getUserByEmail(req.body.email);
    if(!userData){
    return res.json({ // user is not present in db for given email id
        message: 'Email id is incorrect please try again',
        success: true,
        data: null,
        code: 400,
    })
}
else{//user is present in the db for given email id

   // passwordGivenByUser is req.body.password;
    // actualHashedPasswordStored is user.Data.password;
    const passwordVerifed =authService.verifyPassword(req.body.password, userData.password);

    if(passwordVerifed){

        return res.json({ 
            message: 'signed in successfully',
            success: true,
            data: userData,
            code: 200,
        });
    }
    else{ // password is incorrect
        return res.json({ 
            message: 'passowrd is incorrect , please try again',
            success: true,
            data: null,
            code: 400,
        });
    }

    }


}

module.exports = {signup,signin}