const Repository = require('./repository.js');
const { tasks, projects } = require('../mysql/models');

class TaskRepository extends Repository {
    constructor() {
        super(tasks);
    }

    findOne(user_id, id) {
        return super.findOne({
            include: {
                model: projects,
                where: {
                    user_id: user_id,
                },
            },
            where: { id },
        });
    }
}

module.exports = TaskRepository;
