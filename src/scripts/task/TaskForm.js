import { saveTask, getTasks, useTasks, editTask } from "./TaskProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".taskFormContainer")


const TaskFormComponent = () => {

    eventHub.addEventListener("editTaskButtonClicked", event => {
        const taskToBeEdited = event.detail.taskId

        const allTasksArray = useTasks()

        const theFoundedTask = allTasksArray.find(
            (currentTaskObject) => {
                return currentTaskObject.id === parseInt(taskToBeEdited, 10)
            }
        )

        document.querySelector("#task-id").value = theFoundedTask.id
        document.querySelector("#task-task").value = theFoundedTask.task
        document.querySelector("#task-name").value = theFoundedTask.name
        document.querySelector("#task-exCompDate").value = theFoundedTask.exCompDate

    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveTask") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#task-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedTask = {
                    id: parseInt(document.querySelector("#task-id").value, 10),
                    task: document.querySelector("#task-task").value,
                    name: document.querySelector("#task-name").value,
                    exCompDate: document.querySelector("#task-exCompDate").value,
                }

                editTask(editedTask).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newTask = {
                    task: document.querySelector("#task-task").value,
                    name: document.querySelector("#task-name").value,
                    exCompDate: document.querySelector("#task-exCompDate").value,
                }

                saveTask(newTask).then(
                    () => {
                        const message = new CustomEvent("taskCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showTasks") {
            const message = new CustomEvent("showTaskButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary><strong>Tasks</strong></summary>
                <input type="hidden" id="task-id" />
                <div class="task__field">
                    Name: <input type="text" id="task-name" />
                </div>
                <div class="task__field">
                    Task: <input type="text" id="task-task" />
                </div>
                <div class="task__field">
                    Expected Completion: <input type="text" id="task-exCompDate" />
                </div>
                <button class="task__field" id="saveTask">Save Task</button>
                <button class="task__field" id="showTasks">Show Tasks</button>
            </details>
        `
    }

    render()
}

export default TaskFormComponent
