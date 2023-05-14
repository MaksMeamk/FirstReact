import React from "react";

class Class extends React.Component {

    render() {
        console.log(this.props)
        const link = <a href="https://www.google.ru/" > Я туточки</a>
        return (
            <div>
                <p>Моя классовая компонента!</p>
                {/* {console.log(this.props.visible)} */}
                {this.props.visible && link}
            </div>

        )
    }
}

export default Class;