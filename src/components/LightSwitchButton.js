import React,{ useState } from 'react';
function LightSwithchButton(props){
  const{light,switchLight } = props
const handleClick=()=>switchLight();


return(
<button onClick={switchLight} className="LightSwitchButton">
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
    );
};
export default LightSwithchButton;