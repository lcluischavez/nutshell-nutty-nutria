import { getUsers } from "./users/userProvider.js";
import loginList from "./login/loginList.js";
//import { loginFunction } from "./login/loginFunction.js";
import { getArticles } from "./articles/ArticleProvider.js";
import ArticleFormComponent from "./articles/ArticleForm.js";
import ArticleListComponent from "./articles/ArticleList.js";
import { getTasks } from "./task/TaskProvider.js";
import TaskFormComponent from "./task/TaskForm.js";
import TaskListComponent from "./task/TaskList.js";
import { getMessages } from "./message/messageDataProvider.js";
import MessageListComponent from "./message/messageList.js";
import MessageFormComponent from "./message/messageForm.js";
import { getEvents } from "./events/eventProvider.js";
import eventListComponent from "./events/eventList.js";
import eventFormComponent from "./events/eventForm.js";
import { getFriends } from "./friends/friendDataProvider.js";
import FriendFormComponent from "./friends/friendForm.js";
import FriendListComponent from "./friends/friendList.js";

//loginList()
//loginFunction()

getUsers()
    .then(getArticles)
    .then(ArticleFormComponent)   
    .then(ArticleListComponent)

getTasks()
    .then(TaskFormComponent)
    .then(TaskListComponent)


   getMessages()
        .then(MessageFormComponent)
        .then(MessageListComponent)

   getEvents()
      .then(eventFormComponent)
      .then(eventListComponent)

    getFriends()
        .then(FriendFormComponent)
        .then(FriendListComponent)

