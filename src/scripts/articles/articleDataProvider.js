let articles = []

export const useArticles = () => articles.slice()

export const getArticles = () => fetch("http://localhost:8088/articles")
    .then(res => res.json())
    .then(parsedArticles => articles = parsedArticles)