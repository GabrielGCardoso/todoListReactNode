import React from 'react';

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
            <div className='form-check'>
                <input
                    onChange={this.onChangeCheck.bind(this)}
                    checked={this.props.task.checked}
                    className='form-check-input'
                    type='checkbox'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                    Default checkbox
                </label>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderCheckbox()}
                <FontAwesomeIcon onClick={this.onUpdate.bind(this)} icon={faEdit} color='gray' />
                <FontAwesomeIcon onClick={this.onDelete.bind(this)} icon={faTrash} color='red' />
                {this.props.task.name}
            </div>
        );
    }
}
