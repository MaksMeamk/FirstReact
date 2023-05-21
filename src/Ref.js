import React from "react";

class Ref extends React.Component {
    submit = () => {
        console.log('submit', this.input.value)
    }
    render() {
        return (
            <div>
                <input placeholder="test" type='text' ref={(input) => this.input = input} />
                <button onClick={this.submit}> Submit</button>
            </div>
        )
    }
}
export default Ref;