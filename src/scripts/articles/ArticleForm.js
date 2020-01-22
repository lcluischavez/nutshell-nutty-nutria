import { saveArticle, getArticles, useArticles, editArticle } from "./ArticleProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".articleFormContainer")

const ArticleFormComponent = () => {

    eventHub.addEventListener("editArticleButtonClicked", event => {
        const articleToBeEdited = event.detail.articleId

        const allArticlesArray = useArticles()

        const theFoundedArticle = allArticlesArray.find(
            (currentArticleObject) => {
                return currentArticleObject.id === parseInt(articleToBeEdited, 10)
            }
        )
        document.querySelector("#article-id").value = theFoundedArticle.id
        document.querySelector("#article-synopsis").value = theFoundedArticle.synopsis
        document.querySelector("#article-title").value = theFoundedArticle.title
        document.querySelector("#article-timeStamp").value = theFoundedArticle.timeStamp
        document.querySelector("#article-url").value = theFoundedArticle.url
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveArticle") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#article-id").value
            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedArticle = {
                    id: parseInt(document.querySelector("#article-id").value, 10),
                    synopsis: document.querySelector("#article-synopsis").value,
                    title: document.querySelector("#article-title").value,
                    timeStamp: document.querySelector("#article-timeStamp").value,
                    url: document.querySelector("#article-url").value,
                }
                
                editArticle(editedArticle).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("articleHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newArticle = {
                    synopsis: document.querySelector("#article-synopsis").value,
                    title: document.querySelector("#article-title").value,
                    timeStamp: document.querySelector("#article-timeStamp").value,
                    url: document.querySelector("#article-url").value,
                }
                saveArticle(newArticle).then(
                    () => {
                        const message = new CustomEvent("articleCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showArticles") {
            const message = new CustomEvent("showArticleButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })
    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary><strong>Articles</strong></summary>
                <input type="hidden" id="article-id" />
                <div class="article__field">
                    Title: <input type="text" id="article-title" />
                </div>
                <div class="article__field">
                    URL: <input type="text" id="article-url" />
                </div>
                <div class="article__field">
                    Synopsis: <input type="text" id="article-synopsis" />
                </div>
                <div class="article__field">
                    Time Stamp: <input type="text" id="article-timeStamp" />
                </div>
                <button class="article__field" id="saveArticle">Save Article</button>
                <button class="article__field" id="showArticles">Show Articles</button>
            </details>
        `
    }
    render()
}
export default ArticleFormComponent