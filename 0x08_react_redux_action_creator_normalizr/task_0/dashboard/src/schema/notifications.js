import * as data from '../../notifications.json';


const getAllNotificationsByUser = (userId) => {
    return data.default
    .filter((obj) => obj.author.id === userId)
    .map((obj) => obj.context);
}

export default getAllNotificationsByUser;
