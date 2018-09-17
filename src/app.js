import React from 'react'
import { hot } from 'react-hot-loader'
import { TodoList } from './component/todo-list'

const App = () => (
    <div>
      <TodoList name="MCJUG" />
    </div>
)

export default hot(module)(App)
