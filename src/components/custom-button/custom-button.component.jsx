import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...othrProbs}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...othrProbs}> 
        {children}
    </button>
);

export default CustomButton;