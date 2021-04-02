const UserService = require('src/app/services/userService');
module.exports = (user_id) =>
    new UserService().getAllProjectsWithTasks(user_id).then((usersWithProjects) => {
        return { projects: usersWithProjects[0].projects };
    });
