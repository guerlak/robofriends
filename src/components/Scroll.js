import React from 'react';

const Scroll = (props) => {

    console.log(props);

    return (
        <div style={{overflowY: 'scroll', border:'1px solid white', height: '480px'}}>
        {props.children}
        </div>
    )
}

export default Scroll;