//import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getUsers } from "./users/userProvider.js";
//import MessageList from "./message/messageList.js";
import TaskList from "./task/taskList.js";
// import { getFriends } from "./friends/friendDataProvider";
// import { getEvents } from "./events/eventDataProvider";
// import { getArticles } from "./articles/articleDataProvider";


getUsers()
    .then(getTasks)
    .then(TaskList)


