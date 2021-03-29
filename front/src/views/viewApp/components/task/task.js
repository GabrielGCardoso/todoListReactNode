import React from 'react';
import './task.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import TaskService from '../../../../services/taskService';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    async onDelete() {
        const { task, error } = await TaskService.deleteTask(this.props.task.id);
        console.log('onDeleteTask', task);
        if (error) {
            alert(error.message);
            return;
        }

        this.props.onDelete(this.props.task.id);
    }

    async onUpdate(taskUpdated) {
        const { task, error } = await TaskService.updateTask(taskUpdated);
        if (error) {
            alert(error.message);
            return;
        }

        this.props.onUpdate(this.props.task.id, task);
    }

    onChangeCheck({ target }) {
        let { checked } = target;
        this.onUpdate({ ...this.props.task, checked });
    }

    renderCheckbox() {
        return (
            <div className='form-check task'>
                <input
                    onChange={this.onChangeCheck.bind(this)}
                    checked={this.props.task.checked}
                    className='form-check-input'
                    type='checkbox'
                    style={{ paddingRight: '10px' }}
                />
                <label style={{ paddingRight: '10px' }} className='form-check-label' htmlFor='flexCheckDefault'>
                    {this.props.task.name}
                </label>

                <FontAwesomeIcon
                    onClick={this.onUpdate.bind(this)}
                    style={{ marginRight: '3px', marginLeft: '3px' }}
                    icon={faEdit}
                    color='gray'
                />
                <FontAwesomeIcon onClick={this.onDelete.bind(this)} icon={faTrash} color='red' />
            </div>
        );
    }

    render() {
        return <div>{this.renderCheckbox()}</div>;
    }
}
