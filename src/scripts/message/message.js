const messagesComponant = (messages, users) => {
    return `
        <section class="message">
            <div>
                <h3> ${messages.message} </h3>
                <h3> ${users.firstName} </h3>
            </div>
        </section>
    `
}

export default messagesComponant
