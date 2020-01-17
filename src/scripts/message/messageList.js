import { useMessages } from "./messageDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import messagesComponant from "./message.js"



const contentTarget = document.querySelector(".messages")

export const messageListomponant = () => {
    const messages = useMessages()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = users.map(user => {
            const message = users.filter(user => user.id === user.userId)

            const html = messagesComponant(message, user)

            return html
        }).join("")
    }

    render()
}

export default messageListomponant



























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
