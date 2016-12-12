import React, { Component } from 'react';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var text = event.target.value;
        this.props.valChange(this.props.myref, text);
    }
    render() {
        return <div className="form-group">
            <label> { this.props.label } </label>
            <input className="form-control" type="number" step="0.01" onChange={ this.handleChange }
                   myref={this.props.myref} value={ this.props.value } />
        </div>
    }
}

export default InputBox;
