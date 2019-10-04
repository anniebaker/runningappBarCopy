import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
// import Main from "./components/Main";
import HomePage from "./components/HomePage";
import CreateAGoal from "./components/CreateAGoal";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ProfilePage from "./components/ProfilePage";
import MeetPet from "./components/MeetPet";
import LogARun from "./components/LogARun";
import "./App.css";


class App extends Component {
  

  render() {
    return (
      <div className="App">
      <Router basename={'/runningapp'}>
        <Header />
        {/* <Main /> */}
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/profilepage' component={ProfilePage}/>
        <Route exact path='/createagoal' component={CreateAGoal}/>
        <Route exact path='/meetpet' component={MeetPet}/>
        <Route exact path='/logarun' component={LogARun}/>
      </Router>

      </div>
    );
  }
}
export default App;
