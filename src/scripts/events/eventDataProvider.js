let events = []

export const useEvents = () => events.slice()

export const getEvents = () => fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then(parsedEvents => events = parsedEvents)