import React from 'react'
import {hot} from 'react-hot-loader'
import {TodoList} from './component/todo-list'
import {TodoHeader} from "./component/todo-header";

const name = 'MCJUG Tasks'
const todo = [
  { id: 5, name: 'Design API', text: 'Design todo task api'},
  { id: 6, name: 'Create Dynamo DB', text: 'Create schema and save dataset'},
  { id: 7, name: 'Code Lamdas', text: 'Implement AWS lambdas to drive application'},
  { id: 8, name: 'Create API Gateway', text: 'Define AWS API gateway, tie-in lamdas'},
]
const progress = [
  { id: 3, name: 'Complete AWS Tutorial', text: 'Create a simple react project'},
  { id: 4, name: 'Implement Components', text: 'Implement individual react components'},
]
const completed = [
  { id: 1, name: 'Setup Project', text: 'Create a simple react project'},
  { id: 2, name: 'Stub React Components', text: 'Define initial react components'},
]


const App = () => (
  <div>
    <TodoHeader name={name}/>
    <TodoList name="Todo" tasks={todo} />
    <TodoList name="In-Progress" tasks={progress} />
    <TodoList name="Completed" tasks={completed} />
  </div>
)

export default hot(module)(App)
