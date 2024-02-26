import * as data from '../../notifications.json';
import {schema, normalize} from 'normalizr';


export const getAllNotificationsByUser = (userId) => {
    return data.default
    .filter(obj => obj.author.id === userId)
    .map(obj => obj.context);
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

export const normalizeData = normalize(data, new schema.Array(notification)); // data is an array of notifications