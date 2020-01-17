<<<<<<< HEAD
import { login } from "./login/login.js";
// import { getTasks } from "./task/taskDataProvider";
// import { getEvents } from "./events/eventDataProvider";
// import { getArticles } from "./articles/articleDataProvider";
// import { getFriends } from "./friends/friendDataProvider";
// import { getMessages } from "./message/messageDataProvider";

login();
// getTasks
// getEvents
// getArticles
// getFriends
// getMessages
=======
//import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getUsers } from "./users/userProvider.js";
//import MessageList from "./message/messageList.js";
import TaskList from "./task/taskList.js";
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



>>>>>>> master
