import React from 'react';

class SetGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: 0,
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.setGoal(this.state.goal);
                    event.preventDefault();
                }
                }
                    onChange={(event) => {
                        let value = Number(event.target.value);
                        this.setState({ goal: value })
                    }}>

                    <input
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