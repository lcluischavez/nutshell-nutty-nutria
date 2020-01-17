import{useEvents} from"../events/eventDataProvider.js"
import{useUsers} from"../users/userProvider.js"

const  contentTarget = document.querySelector(".events")

export const eventList = () => {
    const allEvents = useEvents()
    const allUsers = useUsers()
   
    const render = () => {
        contentTarget.innerHTML = allUsers.map(user => {
            
            const event = allEvents.find(type => type.id === event.eventId)
           
            const html = users(user, event)

            return html
        }).join("")
    }

    render()
}

export default eventList




















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