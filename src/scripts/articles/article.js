const Article = (article, user) => {
    return `
        <section class="article">
            <h3>${article.title}</h3>
            <a href="${article.url}" target=”_blank”>${article.url}</a>
            <div>${article.synopsis}</div>
        </section>
    `
}

export default Article
