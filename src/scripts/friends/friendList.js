import { useFriends } from "./friendDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import friendsComponent from "./friend.js"

const contentTarget = document.querySelector(".friends")

export const friendsListComponent = () => {
    const messages = useMessages()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = users.map(friend => {
            const user = users.filter(user => user.id === friend.userId)

            const html = friendsComponent(friend, user)

            return html
        }).join("")
    }

    render()
}

export default friendsListComponent
