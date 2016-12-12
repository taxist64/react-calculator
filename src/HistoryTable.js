import React, { Component } from 'react';

class HistoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="history">
                <h3>History!!!</h3>
                <ul>
                    {this.props.history.map(function(historyValue){
                        return <li>{historyValue}</li>;
                    })}
                </ul>

            </div>
        );
    }
}

export default HistoryTable;