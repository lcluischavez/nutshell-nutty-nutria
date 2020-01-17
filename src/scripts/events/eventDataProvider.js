export const saveEvent = event => {
    return fetch('http://localhost:3000/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
  }
  
  let events = []
  
  export const useEvents = () => events.slice()
  
  export const getEvents = () => {
    return fetch('http://localhost:3000/events')
    .then(response => response.json())
      .then(
        event => {
          console.table(event)
          events = event.slice()
        }
      )
  }
  
  export const deleteEvent = event => {
    return fetch(`http://localhost:3000/events/${event.Id}`, {
        method: "DELETE"
    })
        .then(getEvents)
  }
  
  export const editEvents = (event) => {
    return fetch(`http://localhost:3000/events/${event.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
  }