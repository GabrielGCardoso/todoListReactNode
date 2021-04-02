const taskService = require('src/app/services/taskService');
const { Errors, Exceptions } = require('src/infra/exceptions');

module.exports = async (values, id, user_id) => {
    const obj = await taskService.findOne(user_id, id);
    if (!obj) throw Exceptions.notFound('task not found!');
    return taskService.update(values, id);
};
