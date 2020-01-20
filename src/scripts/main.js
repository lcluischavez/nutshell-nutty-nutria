//import { getMessages } from "./message/messageDataProvider.js";
//import { getTasks } from "./task/taskDataProvider.js";
//import { getUsers } from "./users/userProvider.js";
//import MessageList from "./message/messageList.js";
//import TaskList from "./task/taskList.js";
//import { getArticles } from "./articles/articleDataProvider.js";
//import ArticleList from "./articles/articleList.js";
import { getMessages } from "./message/messageDataProvider.js"
import MessageFormComponent from "./message/messageForm.js"
import MessageListComponent from "./message/messageList.js"
import { getEvents } from "./events/eventProvider.js";
import eventFormComponent from "./events/eventForm.js";
import EventList from "./events/eventList.js";
//import loginList from "./login/loginList.js";
//import { loginFunction } from "./login/loginFunction.js";

//loginList()
//loginFunction()

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