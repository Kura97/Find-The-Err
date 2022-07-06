import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav>
            <ul className='navul'>
                <li className='navli'>
                <Link to="/Cards">Cards</Link>
                </li>
                <li className='navli'>
                <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
