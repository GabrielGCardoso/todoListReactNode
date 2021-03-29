const Repository = require('./repository.js');
const { users } = require('../mysql/models');

class UsersRepository extends Repository {
    constructor() {
        super(users);
    }
}

module.exports = UsersRepository;