import React from 'react';
/*function Button(){
    return(
        <button>I am sexy!</button>
    )
}*/

// export default Button;

/*
const Button = props =>{
    return(
        <button>{props.message}</button>
    );
}*/



const Button = (props) => {
    return (
    <>
    <button className="button" type="button">Header
         <h2 className="button_text">{props.text}</h2>
    </button>
    </>
    );
}
    

export default Button;