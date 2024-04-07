import * as data from '../../dist/notifications.json';
import { normalize, schema } from "normalizr";


const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

export const normalizeData = normalize(data, new schema.Array(notification)); // data is an array of notifications
export const getAllNotificationsByUser = (userId) => {
    return Object.values(normalizeData.entities.notifications)
    .reduce((accumulator, notificationValue) => {
        if (notificationValue.author === userId) {
            accumulator.push((normalizeData.entities.messages[notificationValue.context]));
        }
        return accumulator;
    }, []);
}

export const notificationsNormalizer = (data) => {
  const normalizedNotifications = normalize(data, new schema.Array(notification));
  return normalizedNotifications.entities;
}

/*
{
  result: ["5debd76480edafc8af244228"],
  entities: {
    users: {
      "5debd764a7c57c7839d722e9": { // user ID
        id:
        name:
        ...
      }
    },
    messages: {
      "2d8e40be-1c78-4de0-afc9-fcc147afd4d2": { // message guid
        guid:
        isRead:
        ...
      }
    },
    notifications: {
      "5debd76480edafc8af244228": { // notification ID
        id: "5debd76480edafc8af244228",
        author: "5debd764a7c57c7839d722e9", // user ID
        context: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2" // message guid
      }
    }
  }
}

*/