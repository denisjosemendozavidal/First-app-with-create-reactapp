import React, { useState } from 'react'
import FromForUpdate from './FromForUpdate'
import TodoForm from './TodoForm'

const TodoItem = (props) => {

    const [isTrueForUpdate, setIsTrueForUpdate] = useState(false)
    const [input, setInput] = useState("")
    
    const deleteTodo = () => {
        props.deleteTodo(props.todo.id)
    }

    const handleShowUpdateOption = (e) => {
        setIsTrueForUpdate(!isTrueForUpdate)
       
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let updatedInput = document.getElementById('UpdateField').value;
        if (updatedInput === "") {
            props.updateTodo(props.todo.id, props.todo.text)
            handleShowUpdateOption()
        } else {
            props.updateTodo(props.todo.id, updatedInput)
            handleShowUpdateOption()
        }
    }

    

    return (
    <div className='todoItem'>
        <h4 className='todoItem-text-and-id'>{`${props.todo.id}`} {`${props.todo.text}`}</h4>
        <button className='deleteTodo-button' onClick={deleteTodo}>Delete Todo</button>
        <button className='updateTodo-button'>{isTrueForUpdate ? 
        <>
            <form className='updateTodo-button-inside-form'>
                <input className='updateTodo-button-inside-form-input' id='UpdateField' type="text" placeholder="Update Todo" name="text"/>
                <button className='updateTodo-button-inside-form-button' onClick={handleUpdate}>Update</button>
            </form>
        </>
        : <button className='updateTodo-button' onClick={handleShowUpdateOption}>Update</button> }</button>
    </div>
  )
}

export default TodoItem