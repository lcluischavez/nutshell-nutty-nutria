import { loginForm } from "./loginForm.js"
import { loginFunction } from "./loginFunction.js";

const loginList = () => {
    const articles = useLogin()
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