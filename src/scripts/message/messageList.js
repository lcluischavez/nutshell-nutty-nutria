import { getMessages, useMessages, deleteMessage } from "./messageDataProvider.js"

const contentTarget = document.querySelector(".messageContainer")
const eventHub = document.querySelector(".container")

const MessageListComponent = () => {

    eventHub.addEventListener("messageHasBeenEdited", event => {
        const updatedMessages = useMessages()
        render(updatedMessages)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editMessage--")) {
            const [deletePrefix, messageId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    messageId: messageId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteMessage--")) {
            const [deletePrefix, messageId] = clickEvent.target.id.split("--")

            deleteMessage(messageId).then(
                () => {
                   const theNewMessages = useMessages()
                    render(theNewMessage)
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
        renderMessagesAgain()
    })

    const render = (messagesCollection) => {
        contentTarget.innerHTML = messagesCollection.map(
            (individualMessage) => {
                return `
                    <section class="message">
                        <div>${individualMessage.title}</div>
                        <br>
                        <div>${individualMessage.text}</div>
                        <div>
                            ${new Date(individualMessage.exCompDate).toLocaleDateString("us-en")}
                            ${new Date(individualMessage.exCompDate).toLocaleTimeString("us-en")}
                        </div>
                        <button id="deleteMEssage--${individualMessage.id}">Delete</button>
                        <button id="editMessage--${individualMessage.id}">Edit</button>
                        <br>
                        <br>
                    </section>
                `
            }
        ).join("")
    }

}

export default MessageListComponent
