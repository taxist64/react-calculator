import React, { Component } from 'react';

class SelectBox extends Component {
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
            <select className="form-control" onChange={ this.handleChange }
                   myref={this.props.myref} value={ this.props.value } >
                <option>Select</option>
                <option value="/">/</option>
                <option value="*">*</option>
                <option value="+">+</option>
            </select>
        </div>
    }
}

export default SelectBox;
