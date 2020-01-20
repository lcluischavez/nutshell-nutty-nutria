import { getArticles, useArticles, deleteArticle } from "./ArticleProvider.js"

<<<<<<< HEAD
const contentTarget = document.querySelector(".articlesContainer")
const eventHub = document.querySelector(".container")

const ArticleListComponent = () => {

    eventHub.addEventListener("articleHasBeenEdited", event => {
        const updatedArticles = useArticles()
        render(updatedArticles)
    })
=======
const contentTarget = document.querySelector(".articles")
>>>>>>> master

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editArticle--")) {
            const [deletePrefix, articleId] = clickEvent.target.id.split("--")

<<<<<<< HEAD
            const editEvent = new CustomEvent("editArticleButtonClicked", {
                detail: {
                    articleId: articleId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }
=======
    const render = () => {
        contentTarget.innerHTML = articles.map(article => {
            
            const user = users.filter(user => user.id === article.userId)


            const html = Article(article, user)
>>>>>>> master

        if (clickEvent.target.id.startsWith("deleteArticle--")) {
            const [deletePrefix, articleId] = clickEvent.target.id.split("--")

            deleteArticle(articleId).then(
                () => {
                    const theNewArticles = useArticles()
                    render(theNewArticles)
                }
            )
        }
    })

    const renderArticlesAgain = () => {
        const allTheArticles = useArticles()
        render(allTheArticles)

    }

    eventHub.addEventListener("articleCreated", event => {
        renderArticlesAgain()
    })

    eventHub.addEventListener("showArticleButtonClicked", event => {
        renderArticlesAgain()
    })

    const render = (articlesCollection) => {
        contentTarget.innerHTML = articlesCollection.map(
            (individualArticle) => {
                return `
                    <section class="article">
                        <div>${individualArticle.title}</div>
                        <br>
                        <div>${individualArticle.url}</div>
                        <div>${individualArticle.synopsis}</div>
                        <div>
                            ${individualArticle.timeStamp}
                        </div>
                        <button id="deleteArticle--${individualArticle.id}">Complete</button>
                        <button id="editArticle--${individualArticle.id}">Edit</button>
                        <br>
                        <br>
                    </section>
                `
            }
        ).join("")
    }

}

export default ArticleListComponent

