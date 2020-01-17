import { useEvents } from "./eventDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import Event from "./event.js"


const contentTarget = document.querySelector(".events")

export const EventList = () => {
    const events = useEvents()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = events.map(event => {

            const user = users.filter(user => user.id === event.userId)


            const html = Event(event, user)

            return html
        }).join("")
    }

    render()
}

export default EventList