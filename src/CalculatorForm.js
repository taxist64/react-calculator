import React, { Component } from 'react';
import './App.css';
import { bootstrap } from 'bootstrap-css'
import InputBox from './InputBox';
import SelectBox from './SelectBox';

class CalculatorForm extends Component {
    constructor(props) {
        super(props);
        this.state = { history: [],
            firstLabel: 'first operand',
            secondLabel: 'second operand',
            operationLabel: 'operation'};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var firstOperand = this.state.firstOperand,
            secondOperand = this.state.secondOperand,
            operation = this.state.operation,
            result = '';

        var history = this.state.history || [];

        if (!firstOperand) {
            return;
        }
        
        switch(operation) {
            case '/':
                result = firstOperand / secondOperand;
                history.push(firstOperand +  operation + secondOperand + '=' + result);
                break;
            case '+':
                result = firstOperand + secondOperand;
                history.push(firstOperand +  operation + secondOperand + '=' + result);
                break;
            case '*':
                result = firstOperand * secondOperand;
                history.push(firstOperand +  operation + secondOperand + '=' + result);
                break;
            default:
                result = 'validation error';
                break;

        }
        //var re = /^\d+$/;
        // validation();

        this.props.onCalculatorSubmit(history);
        return;
    }

    handleChange(fieldId, value) {
        var newState = {};
        newState[fieldId] = value;

        this.setState(newState);
    }

    handleOperation(fieldId, value) {
        var newState = {};
        newState[fieldId] = value;

        this.setState(newState);
    }

    render() {
        return (
            <form className="CalculatorForm" onSubmit={this.handleSubmit}>
                <InputBox label={this.state.firstLabel} myref="firstOperand" valChange={this.handleChange}/>
                <SelectBox label={this.state.operationLabel} myref="operation" valChange={this.handleOperation}/>
                <InputBox label={this.state.secondLabel} myref="secondOperand" valChange={this.handleChange}/>
                <input className="btn btn-success btn-lg" type="submit" value="Calculate" />
            </form>
        );
    }
}

export default CalculatorForm;