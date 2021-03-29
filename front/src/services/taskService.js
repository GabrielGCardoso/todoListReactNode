const React = require('react');
const axios = require('axios');

export default new (class TaskService extends React.Component {
    constructor(props) {
        super(props);
        this.defaultURL = 'http://localhost:3000';
    }

    createTask(task) {
        return new Promise((resolve) => {
            let error = { message: 'could not create task' };
            if (!task) resolve({ error });
            resolve({ task: { ...task, id:3, checked: false } });
        });
    }

    findTask(id) {
        return new Promise((resolve, reject) => {
            resolve({ id, name: 'task 1', done: false });
        });
    }

    updateTask(newTask) {
        return new Promise((resolve) => resolve({ task: newTask }));
    }

    deleteTask(taskId) {
        return new Promise((resolve) => resolve({ task: { id: taskId } }));
    }
})();
