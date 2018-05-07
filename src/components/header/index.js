import React from 'react';
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <div id="top">
      {props.redirectToReferrer && <span>  
        <button onClick={() => props.handleSignOut()} id="logout">Log Out</button>
      </span>}
    </div>
  )
};

export default Header;
