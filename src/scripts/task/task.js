const Task = (task, user) => {
    return `
        <section class="task">
            <h3>${task.name}</h3>
            <div>${task.task}</div>
        </section>
        <div>
            <input type="button" id="deleteTask" value="Delete"/>
            <input type="button" id="editTask" value="Edit"/>

        </div>
    `
}

export default Task
