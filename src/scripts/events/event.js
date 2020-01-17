
export const eventComponent = (event) => {
    return `
    <div class="eventCard">
    <h4 class="eventName">${event.name}</h4>
    <p class="eventId">${event.id}</p>
    <p class="eventDate">${event.date}</p>
    <button id="editevent--${event.id}">Edit</button>
    <button id="deleteEvent--${event.id}">Delete</button>
    </div>`
  }