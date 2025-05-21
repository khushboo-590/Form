
import React from 'react';

const TextInput = ({ type, name, value, placeholder, onChange }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border p-2 w-full rounded"
        />
    );
};

export default TextInput;
