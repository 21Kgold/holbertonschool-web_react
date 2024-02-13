import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({    
    CourseListFirst : {
        textAlign: 'left',
        paddingLeft: '43%',
    },
    
    CourseListTh: {
        paddingTop: '1.5vh',
        paddingBottom: '1.5vh',
        borderBottom: '2.5px solid rgb(180, 169, 169)',
    }
})

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
            content = <th  className={css(styles.CourseListTh, styles.CourseListFirst)} style={thBackground} colSpan = "2">{textFirstCell}</th>
        } else {
            content = 
            <>
                <th className={css(styles.CourseListTh)} style={thBackground}>{textFirstCell}</th>
                <th className={css(styles.CourseListTh)} style={thBackground}>{textSecondCell}</th>
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
