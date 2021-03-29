const UserService = require('src/app/services/userService');
const AuthService = require('src/app/services/authService');

const { Errors, Exceptions } = require('src/infra/exceptions');
module.exports = async (userObject) => {
    console.log(userObject);
    const user = await new UserService().findOne(userObject);
    if (!user) throw Exceptions.notFound(Errors.USER_NOT_FOUND);
    const token = new AuthService().getToken(user);
    return token;
};
