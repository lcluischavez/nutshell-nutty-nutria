import { getUsers } from "./users/userProvider.js"
import loginList from "./login/loginList.js"
import { loginFunction } from "./login/loginFunction.js";
import { getCurrentUser } from "./users/userProvider.js";

import { getArticles } from "./articles/ArticleProvider.js";
import ArticleListComponent from "./articles/articleList.js";
import ArticleFormComponent from "./articles/ArticleForm.js";

import { getTasks } from "./task/TaskProvider.js";
import TaskFormComponent from "./Task/taskForm.js";
import TaskListComponent from "./task/taskList.js";

import { getEvents } from "./events/eventProvider.js";
import eventListComponent from "./events/eventList.js";
import eventFormComponent from "./events/eventForm.js";

import { getFriends } from "./friends/friendDataProvider.js";
import FriendFormComponent from "./friends/friendForm.js";
import FriendListComponent from "./friends/friendList.js";

import { getMessages } from "./message/messageDataProvider.js";
import MessageFormComponent from "./message/messageForm.js";
import MessageListComponent from "./message/messageList.js";


const login = () => {
getUsers()
   
}

getUsers()
    .then(loginList)
    .then(loginFunction)
    .then(getCurrentUser)
    .then(login)

getArticles()
    .then(ArticleFormComponent)
    .then(ArticleListComponent)

getTasks()
    .then(TaskFormComponent)
    .then(TaskListComponent)

getEvents()
    .then(eventFormComponent)
    .then(eventListComponent)

getMessages()
    .then(MessageFormComponent)
    .then(MessageListComponent)

getFriends()
    .then(FriendFormComponent)
    .then(FriendListComponent)