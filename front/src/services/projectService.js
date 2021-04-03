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

    createProject(projectData, tk) {
        return new Promise((resolve) => {
            this.api
                .post('/project', projectData, { headers: { authorization: tk } })
                .then((resp) => resolve({ project: { ...resp.data, tasks: [] } }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    deleteProject(projectId, tk) {
        return new Promise((resolve) => {
            this.api
                .delete(`/project/${projectId}`, { headers: { authorization: tk } })
                .then((resp) => resolve({ resp: resp.data }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    updateProject(projectData, tk) {
        return new Promise((resolve) => {
            this.api
                .put(`/project/${projectData.id}`, projectData, { headers: { authorization: tk } })
                .then(() => resolve({ project: projectData }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    getProjects(tk) {
        return new Promise((resolve) => {
            if (!tk) resolve({ error: { message: 'tk not found' } });
            this.api
                .get(`/project/projects`, { headers: { authorization: tk } })
                .then((resp) => resolve({ projects: resp.data.projects }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }
}

export default new ProjectService(api);
