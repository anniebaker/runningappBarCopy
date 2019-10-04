import React from 'react';
import Filler from './Filler';
import LogRun from './LogRun';
import SetGoal from './SetGoal';
import critter from './images/critter-transparent-bg-08.png';
import critterGrown from './images/critter-transparent-bg-07.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 40,
      progress: 0,
      percentage: 0,
      imgSrc: critter,
    }
    this.logRun.bind = this.logRun
  }

  setGoal = (newGoal) => {
    this.setState({ goal: newGoal });
  }

  logRun = (addGoal) => {
    let newProg = 0;
    let newPerc = 0;
    if ((this.state.progress + addGoal) < this.state.goal) {
      newProg = this.state.progress + addGoal;
      newPerc = ((newProg / this.state.goal) * 100);
      this.setState({ percentage: newPerc })
    } else {
      newProg = this.state.goal;
      newPerc = 100;
      //change out critter here
      this.setState({ imgSrc: critterGrown })
      //fill bar
      this.setState({ percentage: newPerc })
    };
    this.setState({ progress: newProg })
  }

  goalMet = () => {
    if (this.state.percentage === 100) {
      return (
        <div>
          <span>You met your goal of {this.state.goal} miles! </span>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <SetGoal setGoal={this.setGoal} />
        <LogRun logRun={this.logRun} />
        <div className="progress-bar">
          <Filler percentage={this.state.percentage} />
        </div>
        <img src={this.state.imgSrc} alt='critter'></img>
        <span>You've met {this.state.percentage}% of your goal</span>
        <div>{this.goalMet()}</div>

      </div>
    );
  }
}

export default App;
