import { saveEvents, useEvents, editEvent } from "./eventProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eventFormContainer")

const eventFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const eventToBeEdited = event.detail.eventId

        const allEventsArray = useEvents()

        const theFoundedEvent = allEventsArray.find(
            (currentEventObject) => {
                return currentEventObject.id === parseInt(eventToBeEdited, 10)
            }
        )

        document.querySelector("#event-id").value = theFoundedEvent.id
        document.querySelector("#event-name").value = theFoundedEvent.name
        document.querySelector("#event-Date").value = theFoundedEvent.date
        document.querySelector("#event-location").value = theFoundedEvent.location
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEvent") {

            const hiddenInputValue = document.querySelector("#event-id").value

            if (hiddenInputValue !== "") {
                const editedEvent = {
                    id: parseInt(document.querySelector("#event-id").value, 10),
                    name: document.querySelector("#event-name").value,
                    location: document.querySelector("#event-location").value,
                    Date: document.querySelector("#event-Date").value
                }

                editEvent(editedEvent).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("eventHasBeenEdited"))
                })
            } else {

                const newEvent = {
                    id: document.querySelector("#event-id").value,
                    name: document.querySelector("#event-name").value,
                    location: document.querySelector("#event-location").value,
                    Date: document.querySelector("#event-Date").value
                }

                saveEvents(newEvent).then(
                    () => {
                        const message = new CustomEvent("eventCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showEvents") {
            const message = new CustomEvent("showEventButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Events</summary>
                <input type="hidden" id="event-id" />
                <div class="event__field">
                    Title: <input type="name" id="event-name" />
                </div>
                <div class="event__field">
                    Text: <input type="location" id="event-location" />
                </div>
                <div class="event__field">
                    Date: <input type="dateTime-local" id="event-Date" />
                </div>
                <button class="event__field" id="saveEvent">Save Event</button>
                <button class="event__field" id="showEvents">show Event</button>
            </details>
        `
    }

    render()
}

export default eventFormComponent
