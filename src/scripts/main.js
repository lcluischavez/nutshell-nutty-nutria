//import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getUsers } from "./users/userProvider.js";
//import MessageList from "./message/messageList.js";
import TaskList from "./task/taskList.js";
// import { getFriends } from "./friends/friendDataProvider";
import { getEvents } from "./events/eventDataProvider.js";
import { getArticles } from "./articles/articleDataProvider.js";
import ArticleList from "./articles/articleList.js";
import EventList from "./events/eventList.js";
import loginList from "./login/loginList.js";
import { loginFunction } from "./login/loginFunction.js";
import { getLoginUsers } from "./login/loginProvider.js"
// import { loginPromise } from "./login/loginPromise.js"

const button = document.getElementById("submitLogin");



// getLoginUsers()

// getLoginUsers()
getUsers()
    .then(loginList)
    .then(loginFunction)
    .then(getArticles)
    .then(getTasks)
    .then(getEvents)
    .then(ArticleList)
    .then(TaskList)
    .then(EventList)







// loginList()

// loginPromise()







// getLoginUsers()
//     .then(loginList)
//     .then(loginFunction)
//     .then(getUsers)
//     .then(getArticles)
//     .then(ArticleList)
//     .then(getTasks)
//     .then(TaskList)
//     .then(getEvents)
//     .then(EventList)





