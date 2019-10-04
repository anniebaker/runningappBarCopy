import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router";

let emptyUser = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  distGoal: 0,
};

class LogARun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: emptyUser,
      redirect: false
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(user => this.setState({ user: user[1] }));
  }

  // handleSubmit = e => {
  //   //console.log(this.state.user);
  //   fetch("https://localhost:3001/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(this.state.user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //   // fetch("https://localhost:3001/users", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(this.state.user.distGoal)
  //   // });
  // }
  //   this.setState({ user: emptyUser });
  //   this.setState({ goal: emptyUser });

  //   this.setState({ redirect: true });
  // };

  handleSubmit = e => {
    fetch("https://localhost:3001/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.user),
    })
  }

  render() {

    //const {redirect} = this.state;

    // let userProfile = this.state.user.map((u, index) =>
    //   <UserProfile
    //     key={index}
    //     id={index}
    //     _id={u._id}
    //     user={u}
    //     name={u.fname}
    //     distGoal={u.distGoal}
    //   />
    // )

    return (
      <div className="logARun">
        <button onClick={() => {
          console.log(this.state.user.distGoal)
        }}></button>
        <form onSubmit={(event) => {
          this.handleSubmit()
          // this.props.logRun(this.state.goalStatus);
          console.log(this.state.user.distGoal)
          event.preventDefault();
        }
        }
          // onChange={(event) => {
          //   this.setState({ goal: value })
          // }}
          onChange={(e) => {
            let value = Number(e.target.value);
            this.setState({ user: { ...this.state.user, distGoal: value } })
          }}>

          <input
            type="text"
            name="goal"
          />
          <button type="submit">Log a Run</button>
        </form>
        <h3>You're logging {this.state.goal} miles today</h3>
        <Link to="/meetpet">
          <button>Log A Run</button>
        </Link>
      </div >
    )
  }
}



export default (LogARun);