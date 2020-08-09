import React from 'react';

//Style is a JS expression which can be wrapped in {} and that returns an object in {}
const Scroll = (props) => {
    return (
     <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px'}}> 
        {props.children}
    </div>
    );
};
export default Scroll;