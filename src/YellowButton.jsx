import React from 'react';

const YellowButton = ({ text, onClick }) => {
    const buttonStyle = {
        backgroundColor: 'yellow',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default YellowButton;