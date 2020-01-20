import { getArticles, useArticles, deleteArticle } from "./ArticleProvider.js"

const contentTarget = document.querySelector(".articlesContainer")
const eventHub = document.querySelector(".container")

const ArticleListComponent = () => {

    eventHub.addEventListener("articleHasBeenEdited", event => {
        const updatedArticles = useArticles()
        render(updatedArticles)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editArticle--")) {
            const [deletePrefix, articleId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editArticleButtonClicked", {
                detail: {
                    articleId: articleId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

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

