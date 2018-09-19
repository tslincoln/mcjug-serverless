import React from 'react'
import uuid from 'uuid4'

import {TodoTask} from './todo-task'

import './styles.scss'

export class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.name = this.props.name;
    this.table = this.props.table;
    this.list = this.table.tasks[this.name];

    this.state = {list: this.list}
  }

  render() {
    const name = this.name
    const list = this.state.list
    const decorator = (node) => {this.table.dragAdd(name,list,node)}
    const addTask = this.addTask.bind(this)
    const updateTask = (task) => this.updateTask(task)
    const removeTask = (task) => this.removeTask(task)

    const items = list.map((task) => <TodoTask key={task.id} name={name} task={task} onEdit={updateTask} onDelete={removeTask} /> )

    return (
      <div className="todo-list">
        <h3>{name}</h3>
        <div name={name} className="tasks" ref={decorator}>
          {items}
        </div>
        <div className="tasks">
          <div className="task-item add-task" onClick={addTask}>
            +
          </div>
        </div>
      </div>
    );
  }

  addTask() {
    const task = {
      id: uuid(),
      title: 'New Task',
      text: 'description'
    }
    const list = this.table.addTask(this.name,task)
    this.setState({list: list})
  }

  updateTask(task) {
    const list = this.table.updateTask(this.name,task)
    this.setState({list: list})
  }

  removeTask(task) {
    const list = this.table.removeTask(this.name,task)
    this.setState({list: list})
  }
}