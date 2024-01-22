import React from 'react';
import './Notifications.css';
import icon from './icons8-close-30.png';
import {getLatestNotification} from './utils';

function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <div className="Notifications">
            <button aria-label='Close' onClick={handleClick} style={{float: 'right', backgroundColor: 'transparent', border: 'none'}}>
                <img src={icon} alt='icon' style={{backgroundColor: 'transparent', border: 'none'}}></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
};

export default Notifications;