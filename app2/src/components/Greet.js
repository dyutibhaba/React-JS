import React from 'react';

//here Greet is a functional component
/**
 * 1. Simple funations
 * 2. Abcense of `this` keyword
 * 3. Solution without using state
 * 4. Mainly responsible for UI
 * 5. Stateless/Dumb/Presentational [from version 16.8 its stateful as well]
 */



// function Greet() {
//     return <h1>Hello BBal</h1>
// }

//ES6 way of function
//const Greet = () => <h1>Hello BBal</h1>
export const Greet = (props) => {
    console.log(props);
return (
    <div>
        <h1>Hello {props.name} {props.fuelType}</h1>
        {props.children}
    </div>
    )
}   
//export default Greet;