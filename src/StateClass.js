import React from "react";

class StateClass extends React.Component {
    state = { count: 0 }
    tap = () => { this.setState(state => ({ count: state.count + 1 })) }

    render() {
        const { count } = this.state
        return (
            <div>
                <p> Count click {count}</p>
                <button onClick={() => this.tap()}>Click</button>
            </div >
        )
    }
}
export default StateClass   