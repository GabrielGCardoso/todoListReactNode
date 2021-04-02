const taskService = require('src/app/services/taskService');
const projectService = require('src/app/services/projectService');
const { Errors, Exceptions } = require('src/infra/exceptions');

module.exports = async ({ name, checked, project_id }, user_id) => {
    const project = await projectService.findOne(user_id, project_id);
    if (!project) throw Exceptions.notFound('project not found!');
    return taskService.create({ name, project_id, checked, user_id });
};
