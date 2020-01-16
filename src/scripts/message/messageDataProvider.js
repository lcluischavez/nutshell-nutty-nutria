let messages = []

export const useMessages = () => messages.slice()

export const getMessages = () => fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(parsedMessages => messages = parsedMessages)

































// export const editMessages = (messagesObject) => {
//     return fetch(`http://localhost:8088/messages/${messagesObject.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(messsagesObject)
//     })
//         .then(getMessages)
// }

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
