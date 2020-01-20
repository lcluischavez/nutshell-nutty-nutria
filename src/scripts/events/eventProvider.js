let events = []

const setEvents = eventArray => {
  events = eventArray.slice()
}

export const useEvents = () => events.slice()

export const editEvent = eventObject => {
  return fetch(`http://localhost:3000/events/${eventObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventObject)
  }).then(getEvents)
}

export const deleteEvent = eventId => {
  return fetch(`http://localhost:3000/events/${eventId}`, {
    method: "DELETE"
  })
    .then(getEvents)
}

export const saveEvents = event => {
  return fetch('http://localhost:3000/events', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  })

    .then(getEvents)
}

export const getEvents = () => {
  return fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then((eventArray) => {
      events = eventArray.slice()
    })
}
