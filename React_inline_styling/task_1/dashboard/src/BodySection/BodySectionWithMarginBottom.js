import React from 'react';
import BodySection from './BodySection';


function BodySectionWithMarginBottom(props) {
    return (
        <div>
            <BodySection {...props}></BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;

export default BodySectionWithMarginBottom;