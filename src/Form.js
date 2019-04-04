import React, {Component} from 'react';

class Form extends Component {
    onChangeHandler(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <input
            type="text"
            onChange={this.onChangeHandler}
            />
        )
    }
}

export default Form