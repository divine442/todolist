import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(value)
        setValue("")

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' value={value} placeholder='What is the task today!' onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>ADD TODO</button>
    </form>
  )
}
