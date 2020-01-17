import { getMessages } from "./message/messageDataProvider.js";
import { getUsers } from "./users/userProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import TaskList from "./task/taskList.js";
import messageListComponent from './message/messageList.js'
// import { getFriends } from "./friends/friendDataProvider";
// import { getEvents } from "./events/eventDataProvider";
import { getArticles } from "./articles/articleDataProvider.js";
import ArticleList from "./articles/articleList.js";


ArticleList

getUsers()
    .then(getArticles)
    .then(ArticleList)
    .then(getTasks)
    .then(TaskList)
    .then(getMessages)
    .then(messageListComponent)
