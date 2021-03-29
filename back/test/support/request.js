const request = require('supertest');
const app = require('src/http/server').start()
module.exports = () => request(app);
