import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>Person Name is {props.name} and my age is {props.age} Year Old!</p>
        <p>{props.children}</p>
    </div>

    );
}

export default person;