let friends = []

export const useFriends = () => friends.slice()

export const getFriends = () => fetch("http://localhost:3000/friends")
    .then(res => res.json())
    .then(parsedFriends => friends = parsedFriends)