let messages = []

export const useMessages = () => messages.slice()

export const getMessages = () => fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(parsedMessages => messages = parsedMessages)

const setMessage = (messageArray) => {
    messages = messageArray.slice()
}

export const editMessages = (messageObject) => {
    return fetch(`http://localhost:3000/messages/${messageObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })
        .then(getMessages)

}

export const deleteMessages = (messageId) => {
    return fetch(`http://localhost:3000/messages/${messageId}`, {
        method: "DELETE"
    })
    .then(getMessages)
}

export const saveMessages = message => {
    return fetch('http://localhost:3000/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(getMessages)
}
































// export const saveMessages = message => {
//     return fetch('http://localhost:8088/messages', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(message)
//     })
//     .then(getMessages)
// }

// export const deleteMessage = (messageId) => {
//     return fetch(`http://localhost:8088/messages/${noteId}`, {
//         method: "DELETE"
//     })
//     .then(getMessages)
// }
