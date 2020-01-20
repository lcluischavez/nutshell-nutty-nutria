// import { getMessage } from "./message/messageDataProvider.js";
// import { getTasks } from "./task/taskDataProvider.js";
// import { getUsers } from "./users/userProvider.js";
// import MessageFormComponent from "./message/messageForm.js";
// import MessageListComponent from "./message/messageList.js";
// import TaskList from "./task/taskList.js";
// import { getEvents } from "./events/eventDataProvider.js";
// import { getArticles } from "./articles/articleDataProvider.js";
// import ArticleList from "./articles/articleList.js";
// import eventListComponent from "./events/eventList.js";
// import loginList from "./login/loginList.js";
// import { loginFunction } from "./login/loginFunction.js";

// loginList()
// loginFunction()

// getUsers()
//     .then(getArticles)
//     .then(ArticleList)
//     .then(getTasks)
//     .then(TaskList)
//     .then(getMessage)
//     .then(MessageFormComponent)
//     .then(MessageListComponent)
//     .then(getEvents)
//     .then(eventListComponent)

// //  getMessage()
 
//  MessageListComponent()


import { getMessages } from "./message/messageDataProvider.js"
import MessageFormComponent from "./message/messageForm.js"
import MessageListComponent from "./message/messageList.js"

getMessages()
   .then(MessageFormComponent)
   .then(MessageListComponent)
