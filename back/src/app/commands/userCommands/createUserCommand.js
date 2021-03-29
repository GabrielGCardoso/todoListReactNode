const UserService = require('src/app/services/userService');
module.exports = (userObject) => new UserService().create(userObject);
