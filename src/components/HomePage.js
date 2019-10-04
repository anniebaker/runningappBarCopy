import React from "react";
import { Link } from 'react-router-dom';
import critterPlant from "../images/critter-plant-icon.png";

function HomePage() {
  return (
    <div className="main">
      <img className="critterPlant" src={critterPlant} />
      <p>Start running, stay motivated, and meet goals to help your pet thrive!</p>
      <input className="form-control" placeholder="Enter Your Email Address" />
      <input className="form-control" placeholder="Create a Password" />
      <Link to="/login">
        <button className="btn btn-primary">Log in</button>
      </Link>
      <div className="sign-in">
        <p>Already have an account?</p>
        <Link to="/signup">
          <button className="btn btn-primary">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
