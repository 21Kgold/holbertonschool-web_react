import PropTypes from 'prop-types';
import React, {memo} from 'react';

function NotificationItem(props) {
        if (props.value) {
            return (
                <>
                    <li onClick={() => {props.markAsRead(props.id)}} data-notification-type={props.type}>
                        {props.value}
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li onClick={() => {props.markAsRead(props.id)}} data-notification-type={props.type}
                    dangerouslySetInnerHTML={props.html}>
                    </li>
                </>
            );
        }
    }


NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: '',
    markAsRead: () => {},
    id: null
};
  NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string
    }),
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

export default memo(NotificationItem);
