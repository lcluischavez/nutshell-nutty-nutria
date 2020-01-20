import { saveFriends, getFriends, useFriends, editFriend } from "./friendDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friendFormContainer")


const FriendFormComponent = () => {

    eventHub.addEventListener("editFriendsButtonClicked", event => {
        const friendToBeEdited = event.detail.friendId

        const allFriendsArray = useFriends()

        const theFoundedFriend = allFriendsArray.find(
            (currentFriendObject) => {
                return currentFriendObject.id === parseInt(friendToBeEdited, 10)
            }
        )

        document.querySelector("#friend-id").value = theFoundedFriend.id
        document.querySelector("#friend-text").value = theFoundedFriend.text
        document.querySelector("#friend-title").value = theFoundedFriend.title
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
console.log(clickEvent.target);
        if (clickEvent.target.id === "saveMessage") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#message-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedMessage = {
                    id: parseInt(document.querySelector("#message-id").value, 10),
                    text: document.querySelector("#message-text").value,
                    title: document.querySelector("#message-title").value,
                    exCompDate: Date.now()
                }

                editMessage(editedMessage).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("messageHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newMessage = {
                    text: document.querySelector("#message-text").value,
                    title: document.querySelector("#message-title").value,
                    exCompDate: Date.now()
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
                    Title: <input type="text" id="message-title" />
                </div>
                <div class="message__field">
                    Message: <input type="text" id="message-text" />
                </div>
                <button class="message__field" id="saveMessage">Send Message</button>
                <button class="message__field" id="showMessage">Show Message</button>
            </details>
        `
    }

    render()
}

export default MessageFormComponent
