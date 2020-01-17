const messagesComponent = (messages, users) => {
    return `
        <section class="message">
            <div>
                <h3> ${messages.message} </h3>
            </div>
            <div>
                <button id="messageDelete--${messages.id}">Delete</button>
                <button id="messageEdit--${messages.id}">Edit</button>
                <button id="messageSave--${messages.id}">Save</button>
            </div>
        </section>
    `
}

export default messagesComponent
