import React from "react";
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div className="profilePage">
      <h1>Profile Page</h1>
      <Link to="/meetpet">
          <button>View your Goal</button>
      </Link>
      <Link to="/createagoal">
          <button>Create a Goal</button>
      </Link>
    </div>
  );
      
}

export default (ProfilePage);