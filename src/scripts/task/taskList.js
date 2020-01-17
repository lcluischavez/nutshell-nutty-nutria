import { useTasks } from "./taskDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import Task from "./task.js"



const contentTarget = document.querySelector(".tasks")

export const TaskList = () => {
    const tasks = useTasks()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = tasks.map(task => {
            // Find this product's type
            const user = users.filter(user => user.id === task.userId)

            // Get HTML representation of product
            const html = Task(task, user)

            return html
        }).join("")
    }

    render()
}

export default TaskList