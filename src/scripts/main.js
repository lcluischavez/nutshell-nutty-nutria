import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getUsers } from "./users/userProvider.js";
import messageForm from "./message/messageForm.js";
import messageListComponent from "./message/messageList.js";
import TaskList from "./task/taskList.js";
import { getEvents } from "./events/eventDataProvider.js";
import { getArticles } from "./articles/articleDataProvider.js";
import ArticleList from "./articles/articleList.js";
import eventListComponent from "./events/eventList.js";
import loginList from "./login/loginList.js";
import { loginFunction } from "./login/loginFunction.js";


loginList()
loginFunction()

getUsers()
    .then(getArticles)
    .then(ArticleList)
    .then(getTasks)
    .then(TaskList)
    .then(getMessages)
    .then(messageForm)
    .then(messageListComponent)
    .then(getEvents)
    .then(eventListComponent)

 getMessages()
 
 messageListComponent()
