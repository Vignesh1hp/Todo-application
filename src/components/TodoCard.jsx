import React from 'react'

const TodoCard = (props) => {
  const {todo} = props;
  const handleDelete = () => {
    
  }
  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-buttons'>
        <button disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button onClick={()=>handleDelete()}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}

export default TodoCard