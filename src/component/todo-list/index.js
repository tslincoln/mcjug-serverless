import React from 'react';
class TodoList extends React.Component {
    render() {
        const tasks = this.props.tasks
        const list = tasks.map(function(task){
            return <li key={task.id}>{task.name}</li>
        })

        return (
            <div className="todo-list">
                <h1>Todo List for {this.props.name}</h1>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export {TodoList};