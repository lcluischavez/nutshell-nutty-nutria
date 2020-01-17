<<<<<<< HEAD
const eventComponent = (events, users) => {
    return `
        <section class="event">
            <div>
                <h3> ${events.name} </h3>
            </div>
        </section>
    `
}

export default eventComponent
=======
const Event = (event, user) => {
  return `
      <section class="event">
          <h3>${event.name}</h3>
          <div>${event.location}</div>
      </section>
      <div>
          <input type="button" id="deleteTask" value="Delete"/>
          <input type="button" id="editTask" value="Edit"/>
​
      </div>
  `
}
export default Event
>>>>>>> master
