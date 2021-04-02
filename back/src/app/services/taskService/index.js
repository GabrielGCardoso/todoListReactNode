const TasksRepository = require('src/infra/repository/tasksRepository');

class TasksService {
    constructor() {
        this.repository = new TasksRepository();
    }

    async create(data) {
        return this.repository.create(data);
    }

    async findOne(user_id, id) {
        return this.repository.findOne(user_id, id);
    }

    async update(values, id) {
        const options = { where: { id } };
        return this.repository.update({ values, options });
    }

    async destroy(id) {
        return this.repository.destroy({ where: { id } });
    }
}

module.exports = new TasksService();
