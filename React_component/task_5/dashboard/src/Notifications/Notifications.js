import React, {Component} from 'react';
import './Notifications.css';
import icon from '../assets/icons8-close-30.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const handleClick = () => {
    console.log('Close button has been clicked');
}

let currentNotifications;
let notificationsDisplay;

class Notifications extends Component {
    constructor(props) {
        super(props);
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    // Lifecycle method, when returns false, the component will not re-render
    shouldComponentUpdate(nextProps) {
        return this.props.listNotifications.length < nextProps.listNotifications.length
    }

    render() {
    if (this.props.listNotifications.length < 1) {
        currentNotifications = <tr>No new notification for now</tr>
    } else {
        currentNotifications =
        <>
        <p>Here is the list of notifications</p>
        <ul>
            {this.props.listNotifications.map((element) => {
                return (<NotificationItem key={element.id} type={element.type} value={element.value} html={element.html} />)
            })}
        </ul>
        </>
    }

    if (this.props.displayDrawer === true) {
        notificationsDisplay = <div className="Notifications">
            <button aria-label='Close' onClick={handleClick} style={{float: 'right', backgroundColor: 'transparent', border: 'none'}}>
                <img src={icon} alt='icon' style={{backgroundColor: 'transparent', border: 'none'}}></img>
            </button>
            {currentNotifications}
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
    }
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;