import { getMessages } from "./message/messageDataProvider.js";
import { getUsers } from "./users/userProvider.js";
import messageListComponent from "./message/messageList.js";
// import { getFriends } from "./friends/friendDataProvider";
import { getEvents } from "./events/eventDataProvider.js";
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





// getUsers()
//     .then(getArticles)
//     .then(ArticleFormComponent)
//     .then(ArticleListComponent)
//     .then(getTasks)
//     .then(TaskFormComponent)
//     .then(TaskListComponent)
//     .then(getMessages)
//     .then(messageListComponent)

//    .then(getEvents)
//    .then(EventList)

//import { getTasks } from "./tasks/TaskProvider.js"
//import TaskFormComponent from "./tasks/TaskForm.js"
//import TaskListComponent from "./tasks/TasksList.js"

//getTasks()
//TaskFormComponent()
//TaskListComponent()
//getUsers()
    //.then(getArticles)
    //.then(ArticleList)
    //.then(getTasks)
    //.then(TaskList)
    //.then(getEvents)
    //.then(EventList)
    //.then(getMessages)
    //.then(MessageList)
   

   getMessages()
      .then(MessageFormComponent)
      .then(MessageListComponent)

   getEvents()
      .then(eventFormComponent)
      .then(EventList)
