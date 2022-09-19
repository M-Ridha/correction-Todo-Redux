import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo , editTodo } from '../../redux/actions/TodoAction'

function Todo({ todo }) {

    const [input , setInput] = useState(todo)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }

    const handleEdit = () => {
        dispatch (editTodo(input))
    }


    return (
        <div>
            <hr></hr>
            <div style={{textDecoration : todo.isDone ? "line-through" : "none"}}>
                <input type="checkbox" onClick={handleToggle} />
                {todo.description}
            </div>
            <div>
                <input value={input.description} onChange={(e)=>setInput({...input , description : e.target.value}) } />
                <button onClick={handleEdit}> Save </button>
            </div>

            <button onClick={handleDelete}> Delete </button>

            <hr/>
        </div>
    )
}

export default Todo