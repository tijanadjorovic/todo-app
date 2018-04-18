import React from 'react';
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
        <div  id="top">
            <ul >
                {!props.redirectToReferrer && <span>
                    <li >
                        <Link to="/login">Login</Link>
                    </li>
                </span>}

                {props.redirectToReferrer && <span>
                    <li >
                        <a onClick={() => props.handleSignOut()}>Sign Out</a>
                    </li>
                </span>}
            </ul>
        </div>
    )
};

export default Header;
