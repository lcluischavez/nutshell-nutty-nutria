import { saveMessages, getMessages, useMessages, editMessages } from "./messageDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".messageContainer")

const messageForm = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const messageToBeEdited = event.detail.messageId

        const allMessagesArray = useMessages()

        const theFoundedMessage = allMessagesArray.find(
            (currentMessageObject) => {
                return currentMessageObject.id === parseInt(messageToBeEdited, 10)
            }
        )

        document.querySelector("#message-id").value = theFoundedMessage.id
        document.querySelector("#message-text").value = theFoundedMessage.text
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
                    text: document.querySelector("#message-text").value,
                    date: Date.now()
                }

                editedMessage(editedMessage).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("messageHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newMessage = {
                    message: document.querySelector("#Message-message").value,
                    date: Date.now()
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
        if (clickEvent.target.id === "showMessage") {
            const message = new CustomEvent("showMessageButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>message</summary>

                <input type="hidden" id="message-id" />

                <div class="messsage__field">
                    Message: <input type="text" id="message-message" />
                </div>
                <button class="message__field" id="saveMessage">Save Message</button>
                <button class="message__field" id="showMessage">Show Message</button>
            </details>
        `
    }

    render()
}

export default messageForm