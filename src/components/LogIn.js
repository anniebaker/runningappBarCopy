import React from "react";
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="login">
      <input className="form-control" value="Enter Your Email Address" />
      <input className="form-control" value="Create a Password" />
      <Link to="/profilepage">
        <button className="btn btn-primary">View your Profile</button>
      </Link>
    </div>
  );
      

}

export default LogIn;
