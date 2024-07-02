import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react";

function Navbar(){
   const mystyle= {
      backgroundColor:'black'
    }
    const rightMove = {

      marginLeft : '25px',
      backgroundColor:'white'
    }
    const leftMove = {

      marginLeft : '0px',
      backgroundColor:'black'
    }
    const bgchange = {
      backgroundColor:'gray'
    }
    const bgwchange = {
      backgroundColor : 'white'
    }
   const [flag, setflag] = useState(false);


    function myfun(){
      setflag(prev => !prev);

     
    }
  

return(
<>
<div className="header" style = {flag ? mystyle : {}}>
   <div>   <img src="./images/logo.png" /></div>

   <div className="drk-mode"><div className = "toggle" style = {flag ? bgchange : bgwchange} id = "bcircle" onClick={myfun}>
  
  <div className="inside-circle" style = {flag ? rightMove : leftMove} id = "mincircle"></div>
  
</div></div>
</div>

<div>

</div>
</>


)

}

export default Navbar;