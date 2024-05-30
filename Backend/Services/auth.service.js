const userModel = require('../Models/user.model');
const userService = require('./user.service');
const generateToken = require('../Utils/jwt');

const AuthService = {
    
  async login(email, password,role) {
        const user = await userModel.findOne({ email });
        if (!user) {
            return {
                error: true,
                message: 'User not found'
            };
        }

         if (user.role.toLowerCase() !== role.toLowerCase()) {
            console.log(user.role , role)
            return {
                error: true,
                message: 'User not found'
            };
        }

        if (user.password !== password ) {

            return {
                error: true,
                message: 'Incorrect password'
            };
        }

        // set up jwt token using passport js
        const token = generateToken(user._id, user.role);
        return{
            error: false,
            user:{
            userName: user.userName,
            email: user.email,
            role: user.role,
            id: user._id},
            token
        }
    }
,
    async signup(email, password,userName, role) {
        if (await userService.emailExists(email)) {
            return {
                error: true,
                message: 'Email already exists'
            };
        }
        const user = await userService.createUser( email, password,userName, role );
       
        // set up jwt token using passport js
        const token = generateToken(user._id, user.role);

        return {
            error: false,
            user:{
                userName: user.userName,
                email: user.email,
                role: user.role,
                id: user._id
            },
            token
        };
    }
}


module.exports = AuthService;