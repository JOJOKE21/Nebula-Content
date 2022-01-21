import React, {useState, useEffect, useRef} from 'react';



function TodoForm(props){
    const inputref = useRef(null)
    useEffect(() => {
      inputref.current.focus();
    })
    const handleChange = e => {
    e.preventDefault();
  setInput(e.target.value)
}
  const [input, setInput] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 1000000),
        text: input
      })
    setInput('');
  }
  return(
    <form className='todo-form' onSubmit={handleSubmit}>
     <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputref}/>
      <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm
