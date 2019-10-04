import React from "react";
import { Link } from 'react-router-dom';
import critterIcon from "../images/critter-icon.png";

function Header() {
    return (
      <div>
        <Link to="/" className="header">
          <h1>critter</h1>
          <img alt="critter" className="critterIcon" src={critterIcon} />
        </Link>
      </div>
    );
}

export default Header;
