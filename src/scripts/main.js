import { getMessages } from "./message/messageDataProvider.js";
import { getTasks } from "./task/taskDataProvider.js";
import { getFriends } from "./friends/friendDataProvider.js";
import { getEvents, useEvents } from "./events/eventDataProvider.js";
import { getArticles } from "./articles/articleDataProvider.js";
import eventListComponent from "./events/eventList.js";


getEvents(eventListComponent)
// eventListComponent()
useEvents()
getMessages()
getTasks()
getFriends()
getArticles()