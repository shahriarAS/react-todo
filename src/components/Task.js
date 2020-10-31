import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Task(props) {
    const { id, task, complete } = props
    const state = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState()

    function markComplete() {
        dispatch({
            type: "COMPLETE",
            payload: {
                id: id,
                task: task
            }
        })
    }

    function editTask() {
        if (edit) {
            setEdit("")
        }
        else {
            setEdit(task)
        }
    }

    function updateTask() {
        dispatch({
            type: "UPDATE",
            payload: {
                id: id,
                task: edit,
                complete: complete
            }
        })
        setEdit()
    }

    function deleteTask() {
        dispatch({
            type: "DEL",
            payload: { id: id }
        })
    }
    return (
        <li className="border-b-2 border-green-700 flex justify-between">
            <div className="cursor-pointer">
                {complete == true ? <i onClick={markComplete} className="fa fa-check-square mr-2"></i> : <i onClick={markComplete} className="fa fa-square-o mr-2"></i>}
                {edit ? (
                    <form className="w-full max-w-sm" onSubmit={updateTask}>
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" value={edit} onChange={event => setEdit(event.target.value)} />
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={updateTask}>Update</button>
                        </div>
                    </form>
                ) : (<span onClick={markComplete} className={complete === true ? "text-yellow-100 line-through" : ""}>
                    <span className="text-gray-500 text-xl">{task}</span></span>)}
            </div>
            <div>
                <i className="fa fa-pencil mr-4 cursor-pointer" onClick={editTask}></i>
                <i className="fa fa-trash cursor-pointer" onClick={deleteTask}></i>
            </div>
        </li>
    )
}

export default Task
