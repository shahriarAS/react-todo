import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddTaskForm() {
    const state = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [current, setCurrent] = useState("")

    function AddTask(event) {
        event.preventDefault()
        if (current.length >= 1) {
            dispatch({
                type: "ADD",
                payload: { id: Date.now().toString(), task: current, complete: false }
            })
            setCurrent("")
        }
        else{
            alert("You can't add empty task")
        }
    }

    return (
        <form className="w-full max-w-sm" onSubmit={AddTask}>
            <div className="flex items-center border-b border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Math Homework" aria-label="Full name" value={current} onChange={event => setCurrent(event.target.value)} />
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={AddTask}>Add</button>
            </div>
        </form>
    )
}

export default AddTaskForm
