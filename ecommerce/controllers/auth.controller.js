const authService = require('../services/auth.service');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const response = await authService.signup(req.body);
    return res.json({
        message: 'Successfully signed up',
        success: true,
        data: response,
        code: 200,
    })
}

const signin = async (req, res) => {
    const userData = await authService.getUserByEmail(req.body.email);
    if (!userData) {
        return res.json({ // user is not present in db for given email id
            message: 'Email id is incorrect please try again',
            success: true,
            data: null,
            code: 400,
        })
    }
    else {//user is present in the db for given email id

        // passwordGivenByUser is req.body.password;
        // actualHashedPasswordStored is user.Data.password;
        const passwordVerifed = authService.verifyPassword(req.body.password, userData.password);

        if (passwordVerifed) {
            var token = jwt.sign({ email: userData.email, password: userData.password, username: userData.username }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });
            return res.json({
                message: 'signed in successfully',
                success: true,
                code: 200,
                token: token
            });
        }
        else { // password is incorrect
            return res.json({
                message: 'passowrd is incorrect , please try again',
                success: true,
                data: null,
                code: 400,
            });
        }

    }
}

const addRoleToUser = (req, res) => {
    let response = authService.addRoleToUser(req.params.userId, req.body.roleId);
    if (response) {
        return res.json({
            message: 'Role is added successfully',
            success: true,
            code: 200,
        });
    }
    else {
        return res.json({
            message: 'Internal server error',
            success: true,
            code: 500,
        });
    }


}

module.exports = { signup, signin, addRoleToUser }