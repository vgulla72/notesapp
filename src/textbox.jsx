import React, { useState } from 'react';

const TextBox = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={handleChange} 
                placeholder="Enter text here" 
            />
            <p>{text}</p>
        </div>
    );
};

export default TextBox;