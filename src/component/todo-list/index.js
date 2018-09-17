import React from 'react';
import Dragula from 'react-dragula';

import './styles.scss'

export class TodoList extends React.Component {
  render() {
    const tasks = this.props.tasks
    const list = tasks.map(function(task){
      return <div className="task-item" key={task.id}>{task.name}</div>
    })

    return (
      <div className="todo-list">
        <h1>Todo List for {this.props.name}</h1>
        <div className="tasks" ref={this.dragulaDecorator}>
          {list}
        </div>
      </div>
    );
  }

  dragulaDecorator(node) {
    if (node) {
      Dragula([node], {})
    }
  }
}