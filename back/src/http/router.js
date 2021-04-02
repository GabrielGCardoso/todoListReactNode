const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('cors')());
app.use('/auth', require('src/http/presentation/routes/userRoutes'));
app.use((req, res, next) => {
    req.user_id = 1;
    next();
});
app.use('/project', require('src/http/presentation/routes/projectRoutes'));
app.use('/task', require('src/http/presentation/routes/taskRoutes'));
app.use(require('src/http/presentation/middlewares/exceptionMiddleware'));

app.all('*', async (req, res) => {
    res.status(404).send('route not found');
});

module.exports = app;
