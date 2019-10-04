import React from 'react';

class LogRun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalStatus: 0,
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.logRun(this.state.goalStatus);
                    event.preventDefault();
                }
                }
                    onChange={(event) => {
                        let value = Number(event.target.value);
                        this.setState({ goalStatus: value })
                    }}>

                    <input
                        type="text"
                        name="goal"
                    />
                    <button type="submit">Log a Run</button>
                </form>
                <h3>You're logging {this.state.goalStatus} miles today</h3>

            </div >
        )
    }
}
export default LogRun;

//data valid: if (typeof value === Number) {