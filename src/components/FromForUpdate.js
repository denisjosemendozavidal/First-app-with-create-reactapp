import React, { useState } from 'react'

const FromForUpdate = (props) => {
    const [todo, setTodo] = useState(props.todo)

    const handleUpdate = (e) => {
        e.preventDefault();
        props.setIsTrueForUpdate(!props.isTrueForUpdate)
        props.updateTodo(props.todo.id, todo)
    }

     

  return (
    <form>  
        <input type="text" placeholder="Update Todo" name="text" />
        <button>Update</button>
    </form>
  )
}

export default FromForUpdate