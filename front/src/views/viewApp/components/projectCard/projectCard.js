import './projectCard.css';
import React from 'react';
import Task from '../task/task';

import ProjectService from '../../../../services/projectService';
import TaskService from '../../../../services/taskService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: { name: '' },
            inputValue: this.props.project.title,
            isUpdate: false,
        };
    }

    //project functions
    async onUpdateProject(projectUpdated) {
        const { project, error } = await ProjectService.updateProject(projectUpdated);
        console.log('updateProject', project);
        if (error) {
            alert(error.message);
            return;
        }
        this.props.onUpdate(this.props.project.id, project);
    }

    async onDeleteProject() {
        const { error } = await ProjectService.deleteProject(this.props.project.id);
        if (error) {
            alert(error.message);
            return;
        }
        console.log('deleteProject', this.props.project);
        this.props.onDelete(this.props.project.id);
    }

    //task functions
    onDeleteTask(taskId) {
        const { id, title, tasks } = this.props.project;
        const newTaskArray = [...tasks.filter((t) => t.id !== taskId)];
        this.onUpdateProject({ id, title, tasks: newTaskArray });
    }

    onUpdateTask(taskId, taskUpdated) {
        const { id, title, tasks } = this.props.project;
        const newTaskArray = [...tasks.filter((t) => t.id !== taskId)];
        newTaskArray.push(taskUpdated);
        this.onUpdateProject({ id, title, tasks: newTaskArray });
    }

    taskComparator = function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    };
    renderTasks() {
        this.props.project.tasks.sort(this.taskComparator);
        const taskList = this.props.project.tasks.map((task) => (
            <Task
                key={task.id}
                onUpdate={this.onUpdateTask.bind(this)}
                onDelete={this.onDeleteTask.bind(this)}
                task={task}
            />
        ));
        return <ul>{taskList}</ul>;
    }

    async createNewTask() {
        const { error, task: newTask } = await TaskService.createTask(this.state.newTask, this.props.project.id);
        if (error) {
            alert(error.message);
            return;
        }
        const { id, title, tasks } = this.props.project;
        const newTaskArray = [...tasks, newTask];
        this.onUpdateProject({ id, title, tasks: newTaskArray });
        this.setState({ newTask: { name: '' } });
    }
    onTypingTaskName({ target: { value } }) {
        this.setState({ newTask: { name: value } });
    }
    renderInputTask() {
        return (
            <div className='input-group'>
                <input
                    onChange={this.onTypingTaskName.bind(this)}
                    value={this.state.newTask.name}
                    type='text'
                    className='form-control'
                    placeholder='type a new task here'
                    aria-describedby='basic-addon2'
                />
                <div className='input-group-append'>
                    <button onClick={this.createNewTask.bind(this)} className='btn btn-outline-secondary' type='button'>
                        Add
                    </button>
                </div>
            </div>
        );
    }

    //update project title
    onBlurUpdateProjectTitle() {
        this.setState({ isUpdate: false });
        this.onUpdateProject({ ...this.props.project, title: this.state.inputValue });
    }

    renderHeader() {
        if (this.state.isUpdate)
            return (
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={({ target: { value } }) => this.setState({ inputValue: value })}
                    onBlur={this.onBlurUpdateProjectTitle.bind(this)}
                    autoFocus
                />
            );
        return <div className='float-left'>{this.props.project.title}</div>;
    }

    render() {
        return (
            <div>
                <div className='card' style={{ marginBottom: '10px' }}>
                    <div className='card-header'>
                        {this.renderHeader()}
                        <div className='float-right'>
                            <FontAwesomeIcon
                                onClick={() => this.setState({ isUpdate: true })}
                                style={{ marginRight: '5px' }}
                                icon={faEdit}
                                color='gray'
                            />
                            <FontAwesomeIcon onClick={this.onDeleteProject.bind(this)} icon={faTrash} color='red' />
                        </div>
                    </div>
                    <div className='card-body'>
                        <h6 className='card-subtitle mb-2 text-muted'>{this.props.project.subtitle}</h6>
                        {this.renderTasks()}
                        {this.renderInputTask()}
                    </div>
                </div>
            </div>
        );
    }
}
