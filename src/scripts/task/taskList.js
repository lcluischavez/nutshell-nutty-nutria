import { getTasks, useTasks, deleteTask } from "./TaskProvider.js"
const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector(".container")
const TaskListComponent = () => {
    eventHub.addEventListener("taskHasBeenEdited", event => {
        const updatedTasks = useTasks()
        render(updatedTasks)
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editTask--")) {
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")
            const editEvent = new CustomEvent("editTaskButtonClicked", {
                detail: {
                    taskId: taskId
                }
            })
            eventHub.dispatchEvent(editEvent)
        }
        if (clickEvent.target.id.startsWith("deleteTask--")) {
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")
            deleteTask(taskId).then(
                () => {
                    const theNewTasks = useTasks()
                    render(theNewTasks)
                }
            )
        }
    })
    const renderTasksAgain = () => {
        const allTheTasks = useTasks()
        render(allTheTasks)
    }
    eventHub.addEventListener("taskCreated", event => {
        renderTasksAgain()
    })
    eventHub.addEventListener("showTaskButtonClicked", event => {
        renderTasksAgain()
    })
    const render = (tasksCollection) => {
        contentTarget.innerHTML = tasksCollection.map(
            (individualTask) => {
                return `
                    <section class="task">
                        <div>${individualTask.name}</div>
                        <br>
                        <div>${individualTask.task}</div>
                        <div>
                            ${individualTask.exCompDate}
                        </div>
                        <button id="deleteTask--${individualTask.id}">Complete</button>
                        <button id="editTask--${individualTask.id}">Edit</button>
                        <br>
                        <br>
                    </section>
                `
            }
        ).join("")
    }
}
export default TaskListComponent