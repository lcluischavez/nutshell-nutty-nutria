import { getEvents, useEvents, deleteEvent } from "./eventProvider.js"

const contentTarget = document.querySelector(".eventContainer")
const eventHub = document.querySelector(".container")

const eventListComponent = () => {

    eventHub.addEventListener("eventHasBeenEdited", event => {
        const updatedEvents = useEvents()
        render(updatedEvents)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editEvent--")) {
            const [deletePrefix, eventId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editEventButtonClicked", {
                detail: {
                    eventId: eventId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteEvent--")) {
            const [deletePrefix, eventId] = clickEvent.target.id.split("--")

            deleteEvent(eventId).then(
                () => {
                    const theNewEvents = useEvents()
                    render(theNewEvents)
                }
            )
        }
    })

    const renderEventAgain = () => {
        const allTheEvents = useEvents()
        render(allTheEvents)

    }

    eventHub.addEventListener("eventCreated", event => {
        renderEventAgain()
    })

    eventHub.addEventListener("showEventButtonClicked", event => {
        renderEventAgain()
    })

    const render = (eventsCollection) => {
     contentTarget.innerHTML = eventsCollection.map(
            (individualEvent) => {
                return `
                    <section class="event">
                        <div>${individualEvent.name}</div>
                        <div>${individualEvent.location}</div>
                        <div>
                            ${new Date(individualEvent.date).toLocaleDateString("us-en")}
                            ${new Date(individualEvent.date).toLocaleTimeString("us-en")}
                        </div>
                        <button id="deleteEvent--${individualEvent.id}">Delete</button>
                        <button id="editEvent--${individualEvent.id}">Edit</button>
                        <br>
                    </section>
                `
            }
        ).join("")
    }

}

export default eventListComponent