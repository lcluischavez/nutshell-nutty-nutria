const Task = (task, user) => {
    return `
        <section class="task">
            <h3>${task.name}</h3>
            <div>${task.task}</div>
        </section>
    `
}

export default Task


