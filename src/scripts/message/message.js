const messagesComponant = (messages) => {
    return `
        <section class="message">
            <header>Messages</header>
            <div>
                <h3> username ${messages.message} </h3>
            </div>
        </section>
    `
}

export default messagesComponant
