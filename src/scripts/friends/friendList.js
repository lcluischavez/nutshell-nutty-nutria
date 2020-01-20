import { getFriends, useFriends, deleteFriend } from "./friendDataProvider.js"

const contentTarget = document.querySelector(".friendContainer")
const eventHub = document.querySelector(".container")

const FriendListComponent = () => {
 
    eventHub.addEventListener("friendHasBeenEdited", event => {
        const updatedFriends = useFriends()
        render(updatedFriends)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editFriend--")) {
            const [deletePrefix, friendId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editFriendButtonClicked", {
                detail: {
                    friendId: friendId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteFriend--")) {
            const [deletePrefix, friendId] = clickEvent.target.id.split("--")

            deleteFriend(friendId).then(
                () => {
                   const theNewFriend = useFriends()
                    render(theNewFriend)
                }
            )
        }
    })

    const renderFriendsAgain = () => {
        const allTheFriends = useFriends()
        render(allTheFriends)

    }

    eventHub.addEventListener("friendCreated", event => {
        renderFriendsAgain()
    })

    eventHub.addEventListener("showFriendButtonClicked", event => {
        renderFriendsAgain()
    })

    const render = (friendsCollection) => {
        contentTarget.innerHTML = friendsCollection.map(
            (individualFriend) => {
                return `
                    <section class="friend">
                        <div>${individualFriend.title}</div>
                        <br>
                        <div>${individualFriend.text}</div>
                        <div>
                            ${new Date(individualFriend.exCompDate).toLocaleDateString("us-en")}
                            ${new Date(individualFriend.exCompDate).toLocaleTimeString("us-en")}
                        </div>
                        <button id="deleteMessage--${individualFriend.id}">Delete</button>
                        <button id="editMessage--${individualFriend.id}">Edit</button>
                        <br>
                        <br>
                    </section>
                `
            }
        ).join("")
    }

}

export default FriendListComponent
