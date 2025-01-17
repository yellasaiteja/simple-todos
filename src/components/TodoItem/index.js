// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const deleteTodoItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-items-container">
      <p className="todo-title">{title}</p>
      <button className="todo-button" type="button" onClick={deleteTodoItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
