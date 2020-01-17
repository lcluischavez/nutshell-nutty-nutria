let tasks = []

export const useTasks = () => tasks.slice()

export const getTasks = () => fetch("http://localhost:3000/tasks")
    .then(res => res.json())
    .then(parsedTasks => tasks = parsedTasks)