import { useEvents } from "./eventDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import Event from "./event.js"


const contentTarget = document.querySelector(".events")

export const EventList = () => {
    const events = useEvents()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = events.map(event => {
            // Find this product's type
            const user = users.filter(user => user.id === event.userId)

            // Get HTML representation of product
            const html = Event(event, user)

            return html
        }).join("")
    }

    render()
}

export default EventList