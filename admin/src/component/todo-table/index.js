import React from 'react'
import Dragula from 'react-dragula'
import {TodoList} from './todo-list'

import './styles.scss'

export class TodoTable extends React.Component {
  constructor(props) {
    super(props)
    this.tasks = this.props.tasks;
  }

  render() {
    const tasks = this.tasks
    this.dragularInit()

    const table = {
      tasks: tasks,
      addTask: this.addTask.bind(this),
      updateTask: this.updateTask.bind(this),
      removeTask: this.removeTask.bind(this),
      dragAdd: this.dragulaDecorator.bind(this)
    }

    return (
      <div>
        <TodoList table={table} name='todo' label='Todo' />
        <TodoList table={table} name='progress' label='In-Progress' />
        <TodoList table={table} name='completed' label='Completed' />
      </div>
    );
  }

  addTask(name, task) {
    this.tasks[name].push(task)
    console.log(`added task to ${name}`)
    console.log(this.tasks)
    return this.tasks[name]
  }

  updateTask(name, update) {
    const index = this.tasks[name].findIndex(current => current.id === update.id)
    const task = this.tasks[name][index] = update
    console.log(`updated task ${task.id} in ${name}`)
    console.log(this.tasks)
    return this.tasks[name]
  }

  removeTask(name, task) {
    const index = this.tasks[name].findIndex(current => current.id === task.id)
    this.tasks[name].splice(index,1)
    console.log(`remove task ${task.id} from ${name}`)
    console.log(this.tasks)
    return this.tasks[name]
  }

  dragularInit() {
    const tasks = this.props.tasks;
    this.nodes = {};
    this.dragula = Dragula()
      .on('drop',(el, target, source, sibling) => {
        const sourceName = source.getAttribute('name');
        const targetName = target.getAttribute('name');

        const id = el.getAttribute('id');
        const beforeId = sibling ? sibling.getAttribute('id') : false

        // remove from source list
        const sourceIndex = tasks[sourceName].findIndex(task => task.id === id)
        const model = tasks[sourceName][sourceIndex]
        tasks[sourceName].splice(sourceIndex,1)

        // insert into target list
        const targetIndex = beforeId ? tasks[targetName].findIndex(task => task.id === beforeId) : tasks[sourceName].length
        tasks[targetName].splice(targetIndex,0,model)

        console.log(`${model.id} moved from ${sourceName}, into ${targetName} before ${beforeId}:${targetIndex}`)
        console.log(tasks)
      })
  }

  dragulaDecorator(name,list,node) {
    this.nodes[name] = {node, list};

    if (!node) return;
    this.dragula.containers.push(node);
  }
}