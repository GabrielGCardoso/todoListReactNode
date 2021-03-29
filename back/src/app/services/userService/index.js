const UsersRepository = require('src/infra/repository/usersRepository');

class UsersService {
    constructor() {
        this.repository = new UsersRepository();
    }

    async create(data) {
        return this.repository.create(data);
    }

    async findOne(data) {
        const { user_name, password } = data;
        return this.repository.findOne({ where: { user_name, password } });
    }
}

module.exports = UsersService;
