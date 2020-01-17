import { getMessages } from "./message/messageDataProvider.js";
import { getUsers } from "./users/userProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import TaskList from "./task/taskList.js";
import messageListComponent from './message/messageList.js'
// import { getFriends } from "./friends/friendDataProvider";
// import { getEvents } from "./events/eventDataProvider";
// import { getArticles } from "./articles/articleDataProvider";


getUsers()
    .then(getMessages)
    .then(getTasks)
    .then(TaskList)
    .then(messageListComponent)


