let messages = []

export const useMessages = () => messages.slice()

export const getMessages = () => fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(parsedMessages => messages = parsedMessages)