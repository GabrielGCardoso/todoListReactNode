
const projectService = require('src/app/services/projectService');
const { Errors, Exceptions } = require('src/infra/exceptions');

module.exports = async (id, user_id) => {
    const obj = await projectService.findOne(user_id, id);
    if (!obj) throw Exceptions.notFound('project not found!');
    return projectService.destroy(id);
};