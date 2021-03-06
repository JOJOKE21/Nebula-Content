import React, {useState} from 'react';
import TodoForm from '../TodoForm/todoForm';
import Todo from '../Todo/todo';

function ToDoList(){
    const[todos, setTodos] = useState([]);

    const addTodo = todo =>{
        const newTodos = [todo,...todos]
        setTodos(newTodos)
        console.log('NewTodo:', todo, `\n`, 'OldTodos:', ...todos)
      }
      const completeTodo = id => {
        let updatedTodos = todos.map(todo=> {
          if(todo.id === id){
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
        setTodos(updatedTodos);
      }


    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      }

    return(
        
        <div>
            <h1>This is what im doing today!</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default ToDoList