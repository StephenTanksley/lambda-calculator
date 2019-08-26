import React from "react";

const SpecialButton = (props) => { //we're importing props into this const.
  console.log("special", props)
  return ( //we're returning an element using those props.
    <button className = 'special-button'> 
    {props.text}
    </button>
  );
};

export default SpecialButton