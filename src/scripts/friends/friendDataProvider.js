let friends = []

const setFriends = friendArray => {
  friends = friendArray.slice()
}

export const useFriends = () => friends.slice()

export const editFriend = friendObject => {
  return fetch(`http://localhost:3000/friends/${friendObject.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(friendObject)
  }).then(getFriends)
}

export const deleteFriend = friendId => {
  return fetch(`http://localhost:3000/friends/${friendId}`, {
    method: 'DELETE'
  }).then(getFriends)
}

export const saveFriend = friend => {
  return fetch('http://localhost:3000/friends', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(friend)
  }).then(getFriends)
}

export const getFriends = () => {
    // Load database state into application state
    return fetch("http://localhost:3000/friends")
        .then(response => response.json())
        .then((friendArray) => {
            friends = friendArray.slice()
        })
}
