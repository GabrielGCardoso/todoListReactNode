const projectService = require('src/app/services/projectService');
module.exports = async ({ title }, user_id) => {
    return projectService.create({ title, user_id });
};
