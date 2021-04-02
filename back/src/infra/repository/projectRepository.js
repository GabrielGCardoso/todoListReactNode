const Repository = require('./repository.js');
const { projects, users } = require('../mysql/models');

class ProjectRepository extends Repository {
    constructor() {
        super(projects);
    }

    findOne(user_id, id) {
        return super.findOne({
            include: {
                model: users,
                where: {
                    id: user_id,
                },
            },
            where: { id },
        });
    }
}

module.exports = ProjectRepository;
