let messages = []

const setMessages = messageArray => {
  messages = messageArray.slice()
}

export const useMessages = () => messages.slice()

export const editMessage = messageObject => {
  return fetch(`http://localhost:3000/messages/${messageObject.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageObject)
  }).then(getMessages)
}

export const deleteMessage = messageId => {
  return fetch(`http://localhost:3000/messages/${messageId}`, {
    method: 'DELETE'
  }).then(getMessages)
}

export const saveMessage = message => {
  return fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }).then(getMessages)
}

export const getMessages = () => {
    // Load database state into application state
    return fetch("http://localhost:3000/messages")
        .then(response => response.json())
        .then((messageArray) => {
            messages = messageArray.slice()
        })
}
