import { getMessages } from "./message/messageDataProvider.js";
import { getUsers } from "./users/userProvider.js";
import messageListComponent from "./message/messageList.js";
// import { getFriends } from "./friends/friendDataProvider";
//import { getEvents } from "./events/eventDataProvider.js";
//import EventList from "./events/eventList.js";
import loginList from "./login/loginList.js";
//import { loginFunction } from "./login/loginFunction.js";
import { getTasks } from "./task/TaskProvider.js";
import TaskFormComponent from "./task/TaskForm.js";
import TaskListComponent from "./task/TaskList.js";
import { getArticles } from "./articles/ArticleProvider.js";
import ArticleFormComponent from "./articles/ArticleForm.js";
import ArticleListComponent from "./articles/ArticleList.js";

//loginList()
//loginFunction()

getUsers()
    .then(getArticles)
    .then(ArticleFormComponent)   
    .then(ArticleListComponent)

getTasks()
    .then(TaskFormComponent)
    .then(TaskListComponent)


//    getMessages()
//         .then(MessageFormComponent)
//         .then(MessageListComponent)

//    getEvents()
//       .then(eventFormComponent)
//       .then(EventList)
