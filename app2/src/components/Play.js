import React, { Component } from 'react'

export const Play = (props) => {
    console.log(props);
return (
    <div>
        <h2>Conversation</h2>
        {props.conv}
    </div>
    )
} 
export default Play
