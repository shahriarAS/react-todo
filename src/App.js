import TaskList from './components/TaskList';
import { Provider, useDispatch, useSelector } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.todos)

  function ending(res) {
    if (!res.destination) return;
    const items = Array.from(state)
    const [reordered] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reordered);

    dispatch({
      type: "SET",
      payload: items,
    })
  }

  return (
    <section className="text-gray-500 bg-gray-900 body-font min-h-screen">
      <div className="container px-5 py-8 mx-auto flex flex-wrap items-center">
        <div
          className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full md:mt-0 m-auto min-h-screen">
          <div className="flex flex-col">
            <DragDropContext onDragEnd={ending}>
              <Droppable droppableId="Todo">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <TaskList />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
