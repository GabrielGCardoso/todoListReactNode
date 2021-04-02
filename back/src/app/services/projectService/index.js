const ProjectsRepository = require('src/infra/repository/projectRepository');

class ProjectsService {
    constructor() {
        this.repository = new ProjectsRepository();
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

module.exports = new ProjectsService();
