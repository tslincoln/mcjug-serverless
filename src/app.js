import React from 'react'
import { hot } from 'react-hot-loader'
import { TodoList } from './component/todo-list'

const name = 'MCJUG Tasks'
const taskList = [
  { id: 1, name: 'Setup Project', text: 'Create a simple react project'},
  { id: 2, name: 'Create React Components', text: 'Implement individual react components'},
  { id: 3, name: 'Design API', text: 'Design serverless aws api'},
]

const App = () => (
  <div>
    <TodoList name={name} tasks={taskList} />
  </div>
)

export default hot(module)(App)
