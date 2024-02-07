import PropTypes from 'prop-types';
import React, {Component} from 'react';

class NotificationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.value) {
            return (
                <>
                    <li onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type}>
                        {this.props.value}
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type}
                    dangerouslySetInnerHTML={this.props.html}>
                    </li>
                </>
            );
        }
    }
};

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

export default NotificationItem;
