import React, { Component } from "react";
import { Link } from 'react-router-dom';
let emptyUser = {
  fname: "",
  lname: "",
  email: "",
  password: ""
};

class SignUp extends Component {
  state = { user: emptyUser };

  handleSubmit = e => {
    console.log(this.state.user);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.user)
    });
    this.setState({ user: emptyUser });
  };

  render() {
    return (
      <div>
        <form className="login" onSubmit={this.handleSubmit}>
          First Name:
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, fname: e.target.value }
              });
            }}
          />
          Last Name
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, lname: e.target.value }
              });
            }}
          />
          Email
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, email: e.target.value }
              });
            }}
          />
          Password
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, password: e.target.value }
              });
            }}
          />
          <Link to="/profilepage">
          <input type="submit" value="submit" />
          </Link>
        </form>
      </div>
    );
  }
 
}

export default SignUp;