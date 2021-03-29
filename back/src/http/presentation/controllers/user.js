const creatUserCommand = require('src/app/commands/userCommands/createUserCommand');
const auth = require('src/app/commands/userCommands/authCommand');

const createUser = async (req, res) => {
    const { user_name, password } = req.body;
    const result = await creatUserCommand({ user_name, password });
    res.status(201).send(result);
};

const login = async (req, res) => {
    const { user_name, password } = req.body;
    const result = await auth({ user_name, password });
    res.status(201).send(result);
};

module.exports = { createUser, login };
