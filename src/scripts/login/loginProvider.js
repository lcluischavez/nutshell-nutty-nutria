let users = []

export const useLoginUsers = () => users.slice()

export const getLoginUsers = () => fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(parsedUsers => users = parsedUsers)