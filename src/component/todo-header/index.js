import React from 'react';

import './styles.scss'

export class TodoHeader extends React.Component {
  render() {
    const name = this.props.name

    return (
      <div className="todo-header">
        <h1>Todo List for {name}</h1>
      </div>
    );
  }
}