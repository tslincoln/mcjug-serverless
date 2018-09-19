import React from 'react'
import ReactDOM from 'react-dom'
import uuid from 'uuid4'
import {hot} from 'react-hot-loader'
import {TodoHeader} from "./component/todo-header"
import {TodoTable} from "./component/todo-table"

const name = 'MCJUG Tasks'
const tasks = {
  todo: [
    {id: uuid(), title: 'Design API', text: 'Design todo task api'},
    {id: uuid(), title: 'Create Dynamo DB', text: 'Create schema and save dataset'},
    {id: uuid(), title: 'Code Lamdas', text: 'Implement AWS lambdas to drive application'},
    {id: uuid(), title: 'Create API Gateway', text: 'Define AWS API gateway, tie-in lamdas'},
  ],
  progress: [
    {id: uuid(), title: 'Complete AWS Tutorial', text: 'Create a simple react project'},
    {id: uuid(), title: 'Implement Components', text: 'Implement individual react components'},
  ],
  completed :[
    {id: uuid(), title: 'Setup Project', text: 'Create a simple react project'},
    {id: uuid(), title: 'Stub React Components', text: 'Define initial react components'},
  ]
};

class Main extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader name={name}/>
        <TodoTable tasks={tasks}/>
      </div>
    )
  }
}

const App = hot(module)(Main)
ReactDOM.render(<App />,document.getElementById('react-root'));