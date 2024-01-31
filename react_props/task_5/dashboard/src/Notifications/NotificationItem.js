import PropTypes from 'prop-types';
import React from 'react';

function NotificationItem({type, html, value}) {
    if (value) {
        return (
            <>
                <li data-notification-type={type}>
                    {value}
                </li>
            </>
        );
    } else {
        return (
            <>
                <li data-notification-type={type}
                dangerouslySetInnerHTML={html}>
                </li>
            </>
        );
    }
    
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: '',
};
  NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string
    }),
    value: PropTypes.string
};

export default NotificationItem;
