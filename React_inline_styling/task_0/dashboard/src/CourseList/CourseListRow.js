import React from 'react';
import PropTypes from 'prop-types';


const tdBackground = {
    background: '#f5f5f5ab',
}

const thBackground = {
    background: '#deb5b545',
}

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let content;
    if (isHeader === true) {
        if (textSecondCell === null) {
            content = <th style={thBackground} colSpan = "2">{textFirstCell}</th>
        } else {
            content = 
            <>
                <th style={thBackground}>{textFirstCell}</th>
                <th style={thBackground}>{textSecondCell}</th>
            </>
        }
    } else {
        content =
        <>
            <td style={tdBackground} >{textFirstCell}</td>
            <td style={tdBackground}>{textSecondCell}</td>
        </>
    }
    return (
        <tr>
            {content}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
  
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;
