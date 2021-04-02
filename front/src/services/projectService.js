import api from './api';
class ProjectService {
    constructor() {
        this.api = api();
    }

    errorHandler = function (err) {
        if (err && err.response && err.response.data && err.response.data.message) {
            return { error: { message: err.response.data.message } };
        }
        return { error: err };
    };

    createProject(projectData) {
        return new Promise((resolve) => {
            this.api
                .post('/project', projectData)
                .then((resp) => resolve({ project: { ...resp.data, tasks: [] } }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    deleteProject(projectId) {
        return new Promise((resolve) => {
            this.api
                .delete(`/project/${projectId}`)
                .then((resp) => resolve({ resp: resp.data }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    updateProject(projectData) {
        return new Promise((resolve) => {
            this.api
                .put(`/project/${projectData.id}`, projectData)
                .then(() => resolve({ project: projectData }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    getProjects(tk) {
        return new Promise((resolve) => {
            if (!tk) resolve({ error: { message: 'tk not found' } });
            this.api
                .get(`/project/projects`)
                .then((resp) => resolve({ projects: resp.data.projects }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }
}

export default new ProjectService(api);
