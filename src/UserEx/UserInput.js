import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '8px'
  
      };

    return (
        <input type="text" onChange={props.changed} value={props.currentName} style={inputStyle} />
    )
}

export default userInput;