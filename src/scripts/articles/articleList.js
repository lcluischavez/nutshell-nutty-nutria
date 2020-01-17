import { useArticles } from "./articleDataProvider.js"
import { useUsers } from "../users/userProvider.js"
import Article from "./article.js"

const contentTarget = document.querySelector(".articles")

export const ArticleList = () => {
    const articles = useArticles()
    const users = useUsers()

    const render = () => {
        contentTarget.innerHTML = articles.map(article => {
            // Find this product's type
            const user = users.filter(user => user.id === article.userId)

            // Get HTML representation of product
            const html = Article(article, user)

            return html
        }).join("")
    }

    render()
}

export default ArticleList