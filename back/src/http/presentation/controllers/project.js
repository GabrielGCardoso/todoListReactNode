const creatProjectCommand = require('src/app/commands/projectCommands/createProjectCommand');
const updateProjectCommand = require('src/app/commands/projectCommands/updateProjectCommand');
const destroyProjectCommand = require('src/app/commands/projectCommands/destroyProjectCommand');
const getAllProjectsWithTasksCommand = require('src/app/commands/projectCommands/getAllProjectsWithTasksCommand');

const asyncMiddleware = require('src/http/presentation/middlewares/asyncMiddleware');

const updateProject = asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const result = await updateProjectCommand(req.body, id, req.user_id);
    res.status(201).send(result);
});

const destroyProject = asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const result = await destroyProjectCommand(id, req.user_id);
    res.status(201).send(`${result}`);
});

const getAllProjects = asyncMiddleware(async (req, res) => {
    const result = await getAllProjectsWithTasksCommand(req.user_id);
    res.status(201).send(result);
});

const createProject = asyncMiddleware(async (req, res) => {
    const result = await creatProjectCommand(req.body, req.user_id);
    res.status(201).send(result);
});

module.exports = { getAllProjects, destroyProject, updateProject, createProject };
