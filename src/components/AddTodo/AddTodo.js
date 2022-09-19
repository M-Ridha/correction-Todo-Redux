import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/actions/TodoAction'

function AddTodo() {
    
    const [newTodo , setNewTodo] = useState({description : ""})
    const dispatch = useDispatch() 

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.description.length !== 0 )  dispatch (addTodo(newTodo))
        setNewTodo({description:""})
    }

    return (
        <div>
            <input value={newTodo.description} onChange={(e)=>setNewTodo({description : e.target.value})}  />
            <button onClick={handleAdd}> Add </button>
            <hr></hr>
        </div>
    )
}

export default AddTodo