import React from 'react';
import "./Button.css";

const Button = ({ content, onButtonClick, type }) => {
    return (
       <div className={`button ${content === '0' ? 'zero' : ''} ${type || ''}`} 
       onClick={onButtonClick(content)}
       >
        {content}
        </div>
    );
};

export default Button;