import React from 'react';
class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <h1>Todo List for {this.props.name}</h1>
                <ul>
                    <li>Static list, item 1</li>
                    <li>Static list, item 2</li>
                    <li>Static list, item 3</li>
                </ul>
            </div>
        );
    }
}

export {TodoList};