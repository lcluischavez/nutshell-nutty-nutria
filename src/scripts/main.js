import { getUsers } from "./users/userProvider.js"
//import loginList from "./login/loginList.js"
//import { loginFunction } from "./login/loginFunction.js";
//import { getCurrentUser } from "./users/userProvider.js";
import { getArticles } from "./articles/articleProvider.js";
import { getTasks } from "./task/taskProvider.js";
import { getEvents } from "./events/eventProvider.js";
import ArticleList from "./articles/articleList.js";
import TaskList from "./task/taskList.js";
import EventList from "./events/eventList.js";



getUsers()
   .then(getArticles)
   .then(getTasks)
   .then(getEvents)
   .then(ArticleList)
   .then(TaskList)
   .then(EventList)


// getUsers()
//     .then(loginList)
//     .then(loginFunction)
//     .then(getCurrentUser)
//     .then(login)
//     .then(ArticleList)
//     .then(TaskList)
//     .then(EventList)
