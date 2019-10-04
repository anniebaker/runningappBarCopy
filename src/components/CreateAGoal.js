import React from "react";
import { Link } from 'react-router-dom';

function CreateAGoal() {
  return (
    <div className="createAGoal">
      <h1>Create a Goal</h1>
      <p>I want to run...</p>
      <input className="form-control firstInput" placeholder="#" />
      <p>miles by...</p>
      <input className="form-control secondInput" placeholder="Date" />
      <p>and</p>
      <input className="form-control thirdInput" placeholder="Critter Name" />
      <p>will help me do it!</p>
      <Link to="/meetpet">
        <button className="btn btn-primary">Meet Your Critter</button>
      </Link>
    </div>
  );

}

export default (CreateAGoal);