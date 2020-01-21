import { getUsers } from "./users/userProvider.js"
import loginList from "./login/loginList.js"
import { loginFunction } from "./login/loginFunction.js";
import { getCurrentUser } from "./login/loginProvider.js"
import { getArticles } from "./articles/articleDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getEvents } from "./message/.js";
import ArticleList from "./articles/articleList.js";
import TaskList from "./task/taskList.js";
import EventList from "./events/eventList.js";

getUsers()
    .then(loginList)
    .then(loginFunction)
getCurrentUser()
    .then(getArticles)
    .then(getTasks)
    .then(getEvents)
    .then(ArticleList)
    .then(TaskList)
    .then(EventList)