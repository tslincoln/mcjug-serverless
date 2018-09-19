import React from 'react'

import './styles.scss'

import {EditableSpan} from './editable-span'

export class TodoTask extends React.Component {
  constructor(props) {
    super(props)
    this.name = this.props.name;
    this.task = this.props.task;
    this.onEdit = this.props.onEdit;
    this.onDelete = this.props.onDelete;
  }

  render() {
    const name = this.name
    const task = this.task
    const updateTitle = title => {task.title = title; this.onEdit(task)};
    const updateText = text => {task.text = text; this.onEdit(task)};
    const onDelete = e => this.onDelete(task);

    return (
      <div id={task.id} list={name} className="task-item">
        <i className="fas fa-trash-alt todo-close" onClick={onDelete}/>
        <div className="todo-content">
          <EditableSpan className='task-title' content={task.title} onEdit={updateTitle}/>
          <EditableSpan className='task-content' content={task.text} onEdit={updateText}/>
        </div>
      </div>
    )
  }
}