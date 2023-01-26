import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [inputForm, setInputForm] = useState("")
    
    

    const addTodo = todo => {
        if (!todo.text ) {
            return;
        } else {
            const newTodos = [todo, ...todos]
            setTodos(newTodos)
            console.log(todo, ...todos);
            }
        }

    const deleteTodo = id => {
        const cleanArr = [...todos].filter(todo => todo.id !== id)
        setTodos(cleanArr)
    }

    
        const updateTodo = (todoId, newValue) => {
    
            const updatingTodo = todos.map(todo => {
                if (todo.id === todoId) {
                    return {...todo, text: newValue}
                }
                return todo
            })
    
            setTodos(updatingTodo)
    
    }


    

  return (
    <div>
        <h1 className='main-title'>Denis' Todo App</h1>
        {
            todos.map((todo) => (
                <TodoItem 
                key={todo.id} 
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                
                
                />
            ))
        }
        <TodoForm 
            onSubmit={addTodo}
            inputForm={inputForm}
            setInputForm={setInputForm}
            deleteTodo={deleteTodo}
        />
                                 
    </div>
  )
  } 


export default TodoApp