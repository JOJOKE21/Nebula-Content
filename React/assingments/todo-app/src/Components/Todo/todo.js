import React, {useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from '../TodoForm/todoForm';


function Todo({todos, completeTodo, removeTodo, updateTodo}){
    const [eddit, setEddit] = useState({
    id: null,
    value: ''
  });
 const submitUpdate = (todo) =>{
    updateTodo(eddit.id, todo)
    setEddit({
        id: null,
        value: ""
    })
}

  if(eddit.id){
    return <TodoForm onSubmit={submitUpdate}/>
  }

  return todos.map((todo, idx) => (
      
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={idx}>
    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
     </div>
      <div className="icons">
        <RiCloseCircleLine  onClick={() => removeTodo(todo.id)} className='delete-icon'/>
        <TiEdit onClick={() => setEddit({id: todo.id, value:todo.text})} className='edit-icon'/>
      </div>
    </div>
  ))
  
}

 export default Todo