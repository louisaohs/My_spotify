import React from "react";
import { useState } from 'react';

export default function Search() {

    const style = {
        paddingTop: "20px",
        letterSpacing: "30px",
        color: "#1EAEDB",
        fontSize: "40px"
    };

    const styleLabel = {
        paddingTop: "20px",
        letterSpacing: "10px",
        color: "#1EAEDB",
        fontSize: "10px"
    };

    const styleInfo = {
        paddingTop: "5px",
        letterSpacing: "10px",
        color: "#1EAEDB",
        fontSize: "10px"
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h1 style={style}>Search</h1>
            <label style={styleLabel}>
                Search your music:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <p style={styleInfo}>Your music: {inputValue}</p>
        </div>
    )
}