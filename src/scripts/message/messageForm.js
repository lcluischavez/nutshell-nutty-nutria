import { saveMessage, getMessages, useMessages, editMessage } from "./messageDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".messageFormContainer")


const MessageFormComponent = () => {

    eventHub.addEventListener("editMessageButtonClicked", event => {
        const messageToBeEdited = event.detail.messageId

        const allMessagesArray = useMessages()

        const theFoundedMessage = allMessagesArray.find(
            (currentMessageObject) => {
                return currentMessageObject.id === parseInt(messageToBeEdited, 10)
            }
        )

        document.querySelector("#message-id").value = theFoundedMessage.id
        document.querySelector("#message-messages").value = theFoundedMessage.messages
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveMessage") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#message-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedMessage = {
                    id: parseInt(document.querySelector("#message-id").value, 10),
                    messages: document.querySelector("#message-messages").value,
                }

                editMessage(editedMessage).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("messageHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newMessage = {
                    messages: document.querySelector("#message-messages").value,
                }

                saveMessage(newMessage).then(
                    () => {
                        const message = new CustomEvent("messageCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showMessages") {
            const message = new CustomEvent("showMessageButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Messages</summary>
                <input type="hidden" id="message-id" />
                <div class="message__field">
                    Message: <input type="text" id="message-messages" />
                </div>
                <button class="message__field" id="saveMessage">Send Message</button>
                <button class="message__field" id="showMessage">Show Message</button>
            </details>
        `
    }

    render()
}

export default MessageFormComponent
