import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import AddTaskForm from './AddTaskForm'
import Task from './Task'

function TaskList() {
    const todos = useSelector(state => state.todos)
    const completed = (todos.filter(i => i.complete === true)).length
    const remain = (todos.filter(i => i.complete === false)).length
    return (
        <>
            <h2 className="text-white text-xl font-medium title-font mb-5 text-center">SAS Todo List</h2>
            <p className="text-teal-300 text-center">
                {(todos.length === 0) ? "" : (remain === 0) ? "Every Task Finished" : (remain >= 1 && completed == 0) ? `${remain} Task remain & No task finished` : `${remain} Task remain & ${completed} task finished`}
            </p>
            <AddTaskForm />
            <div className="mt-4">
                <ul className="flex flex-col gap-y-4">
                    {todos.map((todo, index) => {
                        return (
                            <Draggable draggableId={todo.id} index={index} key={todo.id}>
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Task id={todo.id} task={todo.task} complete={todo.complete} />
                                    </div>
                                )}
                            </Draggable>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default TaskList
