import React from 'react';
import './viewApp.css';
import history from '../../history';

//services
import AuthService from '../../services/authService';
import ProjectService from '../../services/projectService';

//components
import ProjectCard from './components/projectCard/projectCard';
import CreateProjectCard from './components/createProjectCard/createProjectCard';

export default class ViewApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoading: true,
            projects: [],
        };
    }

    //start init process
    componentWillMount() {
        this.init();
    }

    async init() {
        await this.revalidateToken(await this.getActualToken());
        this.getAllProjectsWithTasks(await this.getActualToken());
    }

    async getAllProjectsWithTasks(tk) {
        let { projects, error } = await ProjectService.getProjects(tk);
        if (error) {
            alert(error.message);
            return;
        }
        this.setState({ projects });
    }

    async getActualToken() {
        return await localStorage.getItem('token');
    }

    async revalidateToken(tk) {
        const { token, error } = await AuthService.revalidateToken(tk);
        if (error) {
            await localStorage.removeItem('token');
            history.push({
                pathname: '/',
                state: { error },
            });
            return;
        }
        await localStorage.setItem('token', token);
    }
    //end init process

    //project functions
    onCreate(project) {
        const newProjectsArray = [...this.state.projects, project];
        this.setState({ projects: newProjectsArray });
    }

    onDelete(projectId) {
        const newProjectsArray = this.state.projects.filter((p) => p.id !== projectId);
        this.setState({ projects: newProjectsArray });
    }

    onUpdate(projectId, projectUpdated) {
        const newProjectsArray = this.state.projects.filter((p) => p.id !== projectId);
        newProjectsArray.push(projectUpdated);
        this.setState({ projects: newProjectsArray });
    }

    projectsComparator = function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    };

    renderProjects(projectsArray) {
        projectsArray.sort(this.projectsComparator);
        return projectsArray.map((project) => {
            return (
                <div className='col-sm' id={project.id}>
                    <ProjectCard
                        onDelete={this.onDelete.bind(this)}
                        onUpdate={this.onUpdate.bind(this)}
                        project={project}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className='container float-left' style={{ width: '50%' }}>
                    {this.renderProjects(this.state.projects)}
                </div>
                <div className='container float-right' style={{ width: '50%' }}>
                    <CreateProjectCard createProject={this.onCreate.bind(this)} />
                </div>
            </div>
        );
    }
}
