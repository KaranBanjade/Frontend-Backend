import React from 'react';
import { Link } from 'react-router-dom';
const NavigateButton = ({ to, text, children, method }) => {
    if(!method){
        return (
            <>
            <Link to={to} className="navigate-button">
            {children||text}
            </Link>
            </>
        );
    }
    else{
        return (
            <>
            <a href = "localhost:3000/" onClick={method}>
            {children||text}
            </a>
            </>
        );
    }
}

export default NavigateButton;