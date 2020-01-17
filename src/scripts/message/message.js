const messagesComponent = (messages, users) => {
    return `
        <section class="message">
            <div>
                <h3> ${messages.message} </h3>
            </div>
        </section>
    `
}

export default messagesComponent
