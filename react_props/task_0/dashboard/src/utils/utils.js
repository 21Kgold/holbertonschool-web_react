const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => isIndex ? 'Holberton School' : 'Holberton School main dashboard';

const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';

export {getFullYear, getFooterCopy, getLatestNotification};
