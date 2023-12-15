import React, { useReducer, useState } from "react";


function AngryButton(props){
  //const[anger,setAnger] = useState(0);

  const [anger, dispatch] = useReducer((anger, action) => {
    if (anger < 1) {
        return anger + action;
    } else {
        return 0;
    }
}, 0)
  
return(
  <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => dispatch(0.1)} className="AngryButton">

    {anger < 1 && <span>Don't click me too much! </span>}
    {anger > 1  && <span>Rawr!</span>}
  </button>
);
  };
  export default AngryButton;
