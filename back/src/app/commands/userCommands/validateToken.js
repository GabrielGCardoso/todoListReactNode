const { Errors, Exceptions } = require('src/infra/exceptions');
const authService = require('src/app/services/authService');
const userService = require('src/app/services/userService');

module.exports = async (tk) => {
    const { id } = await new authService().validateToken(tk);
    // const dbUser = await new userService().findOne(userData);
    if (!id) throw Exceptions.unauthorized('unauthorized error, try to make login again!');
    return { id };
};
