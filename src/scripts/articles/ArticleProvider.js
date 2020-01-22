let articles = []

const setArticles = (articleArray) => {
    articles = articleArray.slice()
}

export const useArticles = () => articles.slice()

export const editArticle = (articleObject) => {
    return fetch(`http://localhost:3000/articles/${articleObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObject)
    })
            .then(getArticles)
}

export const deleteArticle = (articleId) => {
    return fetch(`http://localhost:3000/articles/${articleId}`, {
        method: "DELETE"
    })
    .then(getArticles)
}

export const saveArticle = article => {
    return fetch('http://localhost:3000/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
}

export const getArticles = () => {
    // Load database state into application state
    return fetch("http://localhost:3000/articles")
        .then(response => response.json())
        .then((articleArray) => {
            articles = articleArray.slice()
        })
}