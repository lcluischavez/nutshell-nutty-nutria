import { useEvents } from "./eventDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import eventComponent from "./event.js"

const contentTarget = document.querySelector(".events")

export const eventListComponent = () => {
    const messages = useEvents()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = events.map(event => {
            const user = users.filter(user => user.id === event.userId)

            const html = eventComponent(event, user)

            return html
        }).join("")
    }

    render()
}

export default eventListComponent
