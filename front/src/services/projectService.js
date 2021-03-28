const React = require('react');
const axios = require('axios');

export default new (class ProjectService extends React.Component {
    constructor(props) {
        super(props);
        this.defaultURL = 'http://localhost:3000';
    }

    createProject(projectData) {
        return new Promise((resolve) => {
            if (!projectData) {
                resolve({ error: { message: 'something went wrong!' } });
            }
            let project = { ...projectData, id: 10, tasks: [{ id: 1, name: 'let it go' }] };
            resolve({ project });
        });
    }

    deleteProject(projectId) {
        return new Promise((resolve) => {
            if (!projectId) {
                resolve({ error: { message: 'could not delete the project' } });
            }
            let project = { id: projectId };
            resolve({ project });
        });
    }

    updateProject(projectData) {
        return new Promise((resolve) => {
            if (!projectData) {
                resolve({ error: { message: 'could not update the project' } });
            }
            let project = { ...projectData /*, tasks: [{ id: 1, name: 'let it go' }]*/ };
            resolve({ project });
        });
    }

    getProjects(tk) {
        return new Promise((resolve, reject) => {
            if (!tk) resolve({ error: { message: 'tk not found' } });
            resolve({
                projects: [
                    {
                        id: 1,
                        title: 'p1',
                        tasks: [{ id: 1, name: 'aaa', checked: true }],
                    },
                    {
                        id: 2,
                        title: 'p2',
                        tasks: [{ id: 1, name: 'uuu', checked: false }],
                    },
                    {
                        id: 3,
                        title: 'p3',
                        tasks: [{ id: 1, name: 'xD', checked: true }],
                    },
                    {
                        id: 4,
                        title: 'p4',
                        tasks: [{ id: 1, name: 'test', checked: false }],
                    },
                ],
            });
        });
    }
})();
