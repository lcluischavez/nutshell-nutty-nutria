 import { saveEvent, editEvents, useEvents } from "./events/eventDataProvider.js";

 const eventHub = document.querySelector("#mainContainer")
 const extraButtonTarget = document.querySelector(".extraButtonContainer")
 const contentTarget = document.querySelector(".eventFormContainer")
 const eventHTML = document.querySelector(".eventContainer")


 const eventFormComponent = () => {

   eventHub.addEventListener("editButtonClicked", event => {
    const eventToBeEdited = event.detail.eventId

    const allEventArray = useEvents()

     const theFoundEvent = allEventArray.find(
       (currentEventObject) => {
        return currentEventObject.id === parseInt(eventToBeEdited, 10)
      }
    )

    document.getElementById("event-id").value = theFoundevent.id
     document.getElementById("event-name").value = theFoundEvent.name
     document.getElementById("event-location").value = theFoundEvent.location
     document.getElementById("event-userId").value = theFoundNote.userId
     document.getElementById("event-date").value = theFoundNote.date
   })


   eventHub.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "saveEvent") {
       clickEvent.preventDefault()

       const hiddenInputValue = document.querySelector("#event-id").value

      if (hiddenInputValue !== "") {
        const editedEvent = {
 id: document.querySelector('#event-id').value,
          name: document.querySelector('#event-name').value,
           location: document.querySelector('#event-location').value,
           date: "Edited " + new Date(Date.now()).toLocaleDateString('en-US'),
           userId: parseInt(document.querySelector("#event-useriId").value, 10)
         }

        editEvents(editedEvent).then(() => {
          eventHub.dispatchEvent(new CustomEvent("eventHasBeenEdited"))
         })
         document.getElementById("eventForm").reset()
         document.querySelector("#event-id").value = ""
       } else {


         clickEvent.preventDefault()


         const newEvent = {
           id: document.querySelector('#event-id').value,
           name: document.querySelector('#event-name').value,
           location: document.querySelector('#event-location').value,
           date: new Date(Date.now()).toLocaleDateString('en-US'),
           userId: document.querySelector('#event-userId').value,
         }

        saveEvent(newEvent).then(() => document.getElementById("eventForm").reset())
           .then(() => {

             if (eventHTML.innerHTML !== "") {
               const allEvents = new CustomEvent("eventCreated")
               eventHub.dispatchEvent(allEvents)
             }
           })
       }
     }
   })

   eventHub.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "showEvents") {
       const allEvents = new CustomEvent("showNoteButtonClicked")
       eventHub.dispatchEvent(allEvents)
     }
   })

  const render = () => {
    contentTarget.innerHTML = `
             <form id="eventForm">
             <input type="hidden" id="event-id">
             <div class="eventForm">
             <label for="event-id">Event: </label>
             <input type="name" id="event-id" placeholder="Your event here...">
             <label for="event-name">name: </label>
             <input type="location" id="location-id-" placeholder="location here...">
            <button id="saveEvent">Save Event</button>
             </form>
             <br>`
     extraButtonTarget.innerHTML = `
             <div class="extraButtons">
             <button id="showEvents">Show Events</button>
             </div>`
   }

   render()
 }

export default eventFormComponent