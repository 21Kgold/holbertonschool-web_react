import React from 'react';
import './Notifications.css';
import icon from '../assets/icons8-close-30.png';
import {getLatestNotification} from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({displayDrawer}) {
    const handleClick = () => {
        console.log('Close button has been clicked');
    }

    let notificationsDisplay;

    if (displayDrawer === true) {
        notificationsDisplay = <div className="Notifications">
            <button aria-label='Close' onClick={handleClick} style={{float: 'right', backgroundColor: 'transparent', border: 'none'}}>
                <img src={icon} alt='icon' style={{backgroundColor: 'transparent', border: 'none'}}></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
            </ul>
        </div>
    } else {
        notificationsDisplay = null;
    }
    return (
        <div className="Notification-container">
        <div className="menuItem">Your notifications</div>
        {notificationsDisplay}
        </div>
    );
};

Notifications.defaultProps = {
    displayDrawer: false
};
Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

export default Notifications;