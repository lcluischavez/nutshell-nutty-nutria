import { saveFriend, getFriends, useFriends, editFriend } from "./friendDataProvider.js"

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
        document.querySelector("#friend-userId").value = theFoundedFriend.userId
        document.querySelector("#friend-InitiatedId").value = theFoundedFriend.InitiatedId
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
// console.log(clickEvent.target);
        if (clickEvent.target.id === "saveFriend") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#friend-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedFriend = {
                    id: parseInt(document.querySelector("#friend-id").value, 10),
                    userId: document.querySelector("#friend-userId").value,
                    InitiatedId: document.querySelector("#friend-InitiatedId").value
                }

                editFriend(editedFriend).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("friendHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newFriend = {
                    id: document.querySelector("#friend-id").value,
                    userId: document.querySelector("#friend-userId").value,
                    InitiatedId: document.querySelector("#friend-InitiatedId").value
                }

                saveFriend(newFriend).then(
                    () => {
                        const friend = new CustomEvent("friendCreated")
                        eventHub.dispatchEvent(friend)
                    }
                )
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showFriends") {
            const friend = new CustomEvent("showFriendButtonClicked")
            eventHub.dispatchEvent(friend)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Friends</summary>
                <input type="hidden" id="friend-id" />
                <div class="friend__field">
                    userId: <input type="text" id="friend-userId" />
                </div>
                <div class="friend__field">
                    InitiatedId: <input type="text" id="friend-InitiatedId" />
                </div>
                <button class="friend__field" id="saveFriend">Send Friend</button>
                <button class="friend__field" id="showFreind">Show Friend</button>
            </details>
        `
    }

    render()
}

export default FriendFormComponent
