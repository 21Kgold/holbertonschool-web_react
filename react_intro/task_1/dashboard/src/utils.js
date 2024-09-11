const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => {
    if (isIndex === true) return 'Holberton School';
    else return 'Holberton School main dashboard';
}

export {getFullYear, getFooterCopy};
