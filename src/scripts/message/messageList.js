import { useMessages } from "./messageDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import messagesComponent from "./message.js"
import { getMessages, deleteMessages } from "./messageDataProvider.js"

// const contentTarget = document.querySelector(".messages")
const contentTarget = document.querySelector(".messageContainer")
const eventHub = document.querySelector(".messageContainer")



export const messageListComponent = () => {
const allTheMessages = useMessages()
       eventHub.addEventListener("messageHasBeenEdited", event => {
        const updatedMessages = useMessages()
        render(updatedMessages)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editMessage--")) {
            const [deletePrefix, MessageId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    messageId: messageId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteMessage--")) {
            const [deletePrefix, messageId] = clickEvent.target.id.split("--")

            deleteNote(messageId).then(
                () => {
                    const theNewMessages = useMessages()
                    render(theNewMessages)
                }
            )
        }
    })

    const renderMessagesAgain = () => {
        const allTheMessages = useMessages()
        render(allTheMessages)

    }

    eventHub.addEventListener("messageCreated", event => {
        renderMessagesAgain()
    })

    eventHub.addEventListener("showMessageButtonClicked", event => {
        renderMessageAgain()
    })

    const render = (allTheMessages) => {
        contentTarget.innerHTML = allTheMessages.map(
            (individualMessage) => {
                return `
                    <section class="messageView">
                        <div>${individualMessage.message}</div>
                        <div>
                            ${new Date(individualMessage.date).toLocaleDateString("us-en")}
                            ${new Date(individualMessage.date).toLocaleTimeString("us-en")}
                        </div>
                        <button id="deleteMessage--${individualMessage.id}">Delete</button>
                        <button id="editMessage--${individualMessage.id}">Edit</button>
                        <button id="saveMessage--${individualMessage.id}">Save</button>
                    </section>
                `
            }
        ).join("")
    }

    // const messages = useMessages()
    // const users = useUsers()

    // const render = () => {
    //     contentTarget.innerHTML = messages.map(message => {
    //         const user = users.filter(user => user.id === message.userId)

    //         const html = messagesComponent(message, user)

    //         return html
    //     }).join("")
    // }

    render()
}

export default messageListComponent



























// 

//     eventHub.addEventListener("messageHasBeenEdited", event => {
//         const updatedMessage = useMessages()
//         render(updatedMessage)
//     })

//     eventHub.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id.startsWith("editMessage--")) {
//             const [deletePrefix, messageId] = clickEvent.target.id.split("--")

//             const editEvent = new CustomEvent("editButtonClicked", {
//                 detail: {
//                     messageId: messageId
//                 }
//             })

//             eventHub.dispatchEvent(editEvent)
//         }

//         if (clickEvent.target.id.startsWith("deleteMessage--")) {
//             const [deletePrefix, noteId] = clickEvent.target.id.split("--")

//             deleteMessage(messageId).then(
//                 () => {
//                     const theNewMessage = useMessages()
//                     render(theNewMessage)
//                 }
//             )
//         }
//     })

//     const renderMessagesAgain = () => {
//         const allTheMessages = useMessages()
//         render(allTheMessages)

//     }

//     eventHub.addEventListener("messageCreated", event => {
//         renderMessageAgain()
//     })

//     eventHub.addEventListener("showMessageButtonClicked", event => {
//         renderMessageAgain()
//     })

//     const render = (messagesCollection) => {
//         contentTarget.innerHTML = messagesCollection.map(
//             (individualMessage) => {
//                 return `
//                     <section class="message">
//                         <div>${individualMessage.suspect}</div>
//                         <div>${individualMessage.text}</div>
//                         <div>
//                             ${new Date(individualMessage.date).toLocaleDateString("us-en")}
//                             ${new Date(individualMessage.date).toLocaleTimeString("us-en")}
//                         </div>
//                         <button id="deleteMessage--${individualMessage.id}">Delete</button>
//                         <button id="editMessage--${individualMessage.id}">Edit</button>
//                     </section>
//                 `
//             }
//         ).join("")
//     }

// }
