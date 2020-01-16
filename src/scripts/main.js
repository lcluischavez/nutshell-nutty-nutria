// import { getMessages } from "./message/messageDataProvider";
// import { getTasks } from "./task/taskDataProvider";
// import { getFriends } from "./friends/friendDataProvider";
// import { getEvents } from "./events/eventDataProvider";
// import { getArticles } from "./articles/articleDataProvider";
import {useMessages} from './message/messageDataProvider.js';
import messageListComponent from './message/messageList.js';

useMessages()
messageListComponent()
// getMessages()
// getTasks
// getFriends
// getEvents
// getArticles
