//import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getUsers, getCurrentUser } from "./users/userProvider.js";
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

let welcome = () = {

}

getUsers()
    .then(loginList)
    .then(loginFunction)
getCurrentUser()
    getArticles()
    getTasks()
    getEvents()
    .then(welcome)
    .then(ArticleList)
    .then(TaskList)
    .then(EventList)













const welcome = () = {

}

getUsers()
    .then(loginList)
    .then(loginFunction)
const currentVal = getCurrentUser()
getArticles(currentVal)
    .then(ArticleList)
getTasks()
    .then(TaskList)
getEvents()
    .then(EventList)
// welcome()