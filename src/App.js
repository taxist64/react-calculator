import React, { Component } from 'react';
import './App.css';
import { bootstrap } from 'bootstrap-css'
import HistoryTable from './HistoryTable';
import CalculatorForm from './CalculatorForm';

class CalculatorWrapper extends Component {
    constructor(props) {
        super(props);

        this.props=props;
        this.state = { history: []};

        this.handleCalculatorSubmit = this.handleCalculatorSubmit.bind(this);
    }
    handleCalculatorSubmit(history) {
        debugger;
        this.setState({ history: history });
    }
    render() {
        var history = this.state.history;
        debugger;
        return (
            <div className="calculatorBox">
                <h1>Test task</h1>
                <CalculatorForm onCalculatorSubmit={this.handleCalculatorSubmit} />
                { history.length > 0 ? <HistoryTable history={history}/> : null }
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <CalculatorWrapper styleName='bootstrap'/>
    );
  }
}

export default App;
