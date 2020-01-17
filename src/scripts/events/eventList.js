import { eventComponent } from "../events/event.js";
import { useEvents, getEvents } from "../events/eventDataProvider.js";

export const eventListComponenet = () => {
    const events = useEvents()
    const Users = useUsers()



    const render = () => {
        contentTarget.innerHTML = users.map(user => {
            const event = events.find(event => users === user.eventId === event.id)
        }





    const html = eventComponent (users, event)
        return html
    }).join("")
}
render()
}

export default eventListComponenet



















// const eventHub = document.querySelector("#mainContainer")
// const eventHTML = document.querySelector(".eventContainer")

// const eventListComponent = () => {

// //   eventHub.addEventListener("eventHasBeenEdited", event => {
// //     render(useEvents())
// //   })

// //   const rerenderEvents = () => {
// //     getEvents().then(
// //       () => {
// //         render(useEvents())
// //       }
// //     )
// //   }
// //   eventHub.addEventListener("eventCreated", event => {
// //     rerenderEvents()
// //   })

// //   eventHub.addEventListener("showNoteButtonClicked", event => {
// //     rerenderEvents()
// //   })

// //   eventHub.addEventListener("click", clickEvent => {
// //     if (clickEvent.target.id.startsWith("editEvent--")) {
// //       const [prefix, id] = clickEvent.target.id.split("--")

// //       const editEvent = new CustomEvent("editButtonClicked", {
// //         detail: {
// //           eventId: id
// //         }
// //       })

// //       eventHub.dispatchEvent(editEvent)
// //     }

// //     if (clickEvent.target.id.startsWith("deleteEvent--")) {
// //       const [prefix, id] = clickEvent.target.id.split("--")

// //       deleteEvents(id).then(() => render(useEvents()))
// //     }
// //   })

// //   const render = eventCollection => {
// //     eventHTML.innerHTML = `
// //       ${eventCollection.map(
// //       (event) => {
// //         return eventComponent(event)
// //       }
// //     ).join("")}`
// //   }
// // }

// export default eventListComponent