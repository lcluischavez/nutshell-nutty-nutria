import { getEvents, useEvents, deleteEvent } from "./eventProvider.js"
​
const contentTarget = document.querySelector(".eventsContainer")
const eventHub = document.querySelector(".container")
​
const eventListComponent = () => {
​
    eventHub.addEventListener("eventHasBeenEdited", event => {
        const updatedEvents = useEvents()
        render(updatedEvents)
    })
​
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editEvent--")) {
            const [deletePrefix, eventId] = clickEvent.target.id.split("--")
​
            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    eventId: eventId
                }
            })
​
            eventHub.dispatchEvent(editEvent)
        }
​
        if (clickEvent.target.id.startsWith("deleteEvent--")) {
            const [deletePrefix, eventId] = clickEvent.target.id.split("--")
​
            deleteEvent(eventId).then(
                () => {
                    const theNewEvents = useEvent()
                    render(theNewEvents)
                }
            )
        }
    })
​
    const renderEventAgain = () => {
        const allTheEvents = useEvents()
        render(allTheEvents)
​
    }
​
    eventHub.addEventListener("eventCreated", event => {
        renderEventAgain()
    })
​
    eventHub.addEventListener("showEventButtonClicked", event => {
        renderEventAgain()
    })
​
    const render = (eventCollection) => {
        contentTarget.innerHTML = tasksCollection.map(
            (individualEvent) => {
                return `
                    <section class="event">
                        <div>${individualEvent.id}</div>
                        <br>
                        <div>${individualEvent.name}</div>
                        <div>
                            ${new Date(individualEvent.exCompDate).toLocaleDateString("us-en")}
                            ${new Date(individualEvent.exCompDate).toLocaleTimeString("us-en")}
                        </div>
                        <button id="deleteEvent--${individualEvent.id}">Delete</button>
                        <button id="editEvent--${individualEvent.id}">Edit</button>
                        <br>
                        <br>
                    </section>
                `
            }
        ).join("")
    }
​
}
​
export default eventListComponent































// import { getEvent, useEvents, deleteEvent } from "./eventProvider.js/"

// export const EventList = () => {
//     const contentTarget = document.querySelector(".events")

//     const events = useEvents()
//     const users = useUsers()

//     const render = () => {
//         contentTarget.innerHTML = events.map(event => {

//             const user = users.filter(user => user.id === event.userId)


//             const html = Event(event, user)

//             return html
//         }).join("")
//     }

//     render()
// }

// export default EventList