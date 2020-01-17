const Article = (article, user) => {
    return `
        <section class="article">
            <h3>${article.title}</h3>
            <a href="${article.url}" target=”_blank”>${article.url}</a>
            <div>${article.synopsis}</div>
        </section>
        <br>
        <div>
            <input type="button" id="deleteArticle" value="Delete"/>
            <input type="button" id="editArticle" value="Edit"/>
        </div>
    `
}

export default Article
