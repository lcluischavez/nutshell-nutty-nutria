import { getFriends, useFriends, deleteFriend } from "./friendDataProvider.js"

const contentTarget = document.querySelector(".friendsContainer")
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
                   const theNewFriends = useFriends()
                    render(theNewFriends)
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
                        <div>${individualFriend.id}</div>
                        <br>
                        <div>${individualFriend.userId}</div>
                        <br>
                        <div>${individualFriend.InitiatedId}</div>
                        <button id="deleteFriend--${individualFriend.id}">Delete</button>
                        <br>
                    </section>
                `
            }
        ).join("")
    }

}

export default FriendListComponent
