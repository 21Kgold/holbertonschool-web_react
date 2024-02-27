import * as data from '../../notifications.json';
import {schema, normalize} from 'normalizr';


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
