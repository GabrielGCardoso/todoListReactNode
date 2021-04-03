const { Errors, Exceptions } = require('src/infra/exceptions');
const validateToken = require('src/app/commands/userCommands/validateToken');
const asyncMiddleware = require('src/http/presentation/middlewares/asyncMiddleware');

module.exports = asyncMiddleware(async (req, res, next) => {
    const tk = req.headers.authorization;
    if (!req.headers.authorization) {
        throw Exceptions.unauthorized('unauthorized error, try to make login again!');
    }
    const { id } = await validateToken(tk);
    req.user_id = id;
    next();
});
