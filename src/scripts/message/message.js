const Messages = (messages) => {
    return `
        <section class="showMessages">
            <header>Messages</header>
            <div>
                <h3> Last Name ${messages.} </h3>
            </div>
            <div>
                <h3> First Name ${messages.} </h3>
            </div>
            <div>
                <h3> Computer ${messages.} </h3>
            </div>
            <div>
                <h3> Department ${messages.} </h3>
            </div>
            <div>
                <h3> Locations ${messages.} </h3>
            </div>
        </section>
    `
}

export default Messages
