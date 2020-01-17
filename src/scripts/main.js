//import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getUsers } from "./users/userProvider.js";
//import MessageList from "./message/messageList.js";
import TaskList from "./task/taskList.js";
// import { getFriends } from "./friends/friendDataProvider";
import { getArticles } from "./articles/articleDataProvider.js";
import ArticleList from "./articles/articleList.js";
import { getEvents } from "./events/eventDataProvider.js";
import eventList from "./events/eventList.js"



getUsers()
    .then(getArticles)
    .then(ArticleList)
    .then(getEvents)
    .then(eventList)
    .then(getTasks)
    .then(TaskList)



