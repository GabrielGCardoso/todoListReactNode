import api from './api';

class TaskService {
    constructor() {
        this.api = api();
    }

    errorHandler = function (err) {
        if (err && err.response && err.response.data && err.response.data.message) {
            return { error: { message: err.response.data.message } };
        }
        return { error: err };
    };

    createTask(task, project_id, tk) {
        return new Promise((resolve) => {
            this.api
                .post('/task', { ...task, project_id }, { headers: { authorization: tk } })
                .then((resp) => resolve({ task: resp.data }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    updateTask(taskUpdated, tk) {
        return new Promise((resolve) => {
            this.api
                .put(`/task/${taskUpdated.id}`, taskUpdated, { headers: { authorization: tk } })
                .then(() => resolve({ task: taskUpdated }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }

    deleteTask(taskId, tk) {
        return new Promise((resolve) => {
            this.api
                .delete(`/task/${taskId}`, { headers: { authorization: tk } })
                .then((resp) => resolve({ resp: resp.data }))
                .catch((err) => resolve(this.errorHandler(err)));
        });
    }
}

export default new TaskService(api);
