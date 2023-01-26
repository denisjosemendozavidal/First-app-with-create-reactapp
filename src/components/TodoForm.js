import React, { useState } from 'react'

const TodoForm = (props) => {
    
    const [input, setInput] = useState("")
    
    const handleChange = (e) => {
        setInput(e.target.value)

    }

    const handleSubmit = (e) => {
            e.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            })

            setInput("")
    }

   

  return (
    <form onSubmit={handleSubmit} className="todoForm">
        <input type="text" placeholder="Enter Todo" name="text" onChange={handleChange} value={input}/>
        <button>Add Todo</button>
    </form>
  )
}

export default TodoForm