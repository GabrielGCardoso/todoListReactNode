const Repository = require('./repository.js');
const { users, projects, tasks } = require('../mysql/models');

class UsersRepository extends Repository {
    constructor() {
        super(users);
    }

    getAllAggregateTables({ where }) {
        return this.findAll({ include: { model: projects, include: tasks }, where });
    }
}

module.exports = UsersRepository;
