import React from 'react';
import { restElement } from '@babel/types';

class SetGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: 0,
        }
    }
    handleSubmit = (event) => {
        this.props.setGoal(this.state.goal);
        //event.target.value = 0;
        this.setState({
            goal: 0,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.handleSubmit(event);
                    this.setState({ goal: 0, })
                    event.preventDefault();

                }
                }
                    onChange={(event) => {
                        let value = Number(event.target.value);
                        this.setState({ goal: value })
                    }}>

                    <input
                        className="goalBar"
                        type="text"
                        name="goal"
                    />
                    <button type="submit">Set Goal</button>
                </form>
            </div >
        )
    }
}

export default SetGoal;