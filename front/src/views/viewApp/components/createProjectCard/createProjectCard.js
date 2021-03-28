import React from 'react';
import ProjectService from '../../../../services/projectService';

export default class CreateProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            actualName: '',
        };
    }

    async createProject() {
        const { project, error } = await ProjectService.createProject({ title: this.state.actualName });
        if (error) {
            alert(error.message);
            return;
        }
        this.props.createProject(project);
    }

    onChange({ target }) {
        this.setState({ actualName: target.value });
    }

    render() {
        return (
            <div class='card'>
                <div class='card-header'>Create a project</div>
                <div class='card-body'>
                    <input onChange={this.onChange.bind(this)} type='text'></input>
                    <button onClick={this.createProject.bind(this)} class='btn btn-primary'>
                        Create Project
                    </button>
                </div>
            </div>
        );
    }
}
