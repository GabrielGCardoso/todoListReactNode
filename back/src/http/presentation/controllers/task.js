const creatTaskCommand = require('src/app/commands/taskCommands/createTaskCommand');
const updateTaskCommand = require('src/app/commands/taskCommands/updateTaskCommand');
const destroyTaskCommand = require('src/app/commands/taskCommands/destroyTaskCommand');

const asyncMiddleware = require('src/http/presentation/middlewares/asyncMiddleware');

const updateTask = asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const result = await updateTaskCommand(req.body, id, req.user_id);
    res.status(201).send(result);
});

const destroyTask = asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const result = await destroyTaskCommand(id, req.user_id);
    res.status(201).send(`${result}`);
});

const createTask = asyncMiddleware(async (req, res) => {
    const result = await creatTaskCommand(req.body, req.user_id);
    res.status(201).send(result);
});

module.exports = { updateTask, createTask, destroyTask };
