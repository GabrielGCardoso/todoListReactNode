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
        const { project, error } = await ProjectService.createProject(
            { title: this.state.actualName },
            localStorage.getItem('token')
        );
        if (error) {
            alert(error.message);
            return;
        }
        this.props.createProject(project);
        this.setState({ actualName: '' });
    }

    onChange({ target }) {
        this.setState({ actualName: target.value });
    }

    render() {
        return (
            <div className='card'>
                <div className='card-header'>Create a project</div>
                <div className='card-body'>
                    <input onChange={this.onChange.bind(this)} value={this.state.actualName} type='text'></input>
                    <button onClick={this.createProject.bind(this)} className='btn btn-primary'>
                        Create Project
                    </button>
                </div>
            </div>
        );
    }
}
