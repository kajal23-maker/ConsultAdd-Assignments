import React, { Component } from 'react';
import Symbol from 'currency-symbol-map';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            from: '',
            to: '',
            result: '',
            unit: ''
        }
    }

    updateInput(e) {
        this.setState({
            inputVal: e.target.value
        })
    }

    updateSelectFrom(e) {
        this.setState({ from: e.target.value })
        console.log(e.target.value);
    }
    updateSelectTo(e) {
        this.setState({ to: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.from === "USD") {
            if (this.state.to === "EUR") {
                const val = this.state.inputVal * 0.92;
                // const val1 = 
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "INR") {
                const val = this.state.inputVal * 81.38;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });
            } else if (this.state.to === "GBP") {
                const val = this.state.inputVal * 0.81;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });
            } else if (this.state.to === "RUB") {
                const val = this.state.inputVal * 68.72;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });
            } else {
                const val = this.state.inputVal;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });
            }
        } else if (this.state.from === "EUR") {
            if (this.state.to === "USD") {
                const val = this.state.inputVal * 1.09;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "INR") {
                const val = this.state.inputVal * 88.29;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "GBP") {
                const val = this.state.inputVal * 0.88;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "RUB") {
                const val = this.state.inputVal * 74.61;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else {
                const val = this.state.inputVal;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            }
        } else if (this.state.from === "INR") {
            if (this.state.to === "USD") {
                const val = this.state.inputVal * 0.01;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "EUR") {
                const val = this.state.inputVal * 0.01;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "GBP") {
                const val = this.state.inputVal * 0.01;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "RUB") {
                const val = this.state.inputVal * 0.85;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else {
                const val = this.state.inputVal;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            }
        } else if (this.state.from === "GBP") {
            if (this.state.to === "USD") {
                const val = this.state.inputVal * 1.23;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "EUR") {
                const val = this.state.inputVal * 1.14;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "INR") {
                const val = this.state.inputVal * 100.34;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "RUB") {
                const val = this.state.inputVal * 84.83;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else {
                const val = this.state.inputVal;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            }
        } else {
            if (this.state.to === "USD") {
                const val = this.state.inputVal * 0.01;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "EUR") {
                const val = this.state.inputVal * 0.01;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "INR") {
                const val = this.state.inputVal * 1.18;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else if (this.state.to === "GBP") {
                const val = this.state.inputVal * 0.01;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            } else {
                const val = this.state.inputVal;
                this.setState({
                    result: val,
                    unit: Symbol(this.state.to)
                });

            }
        }

    }

    render() {
        return (
            <div className='main'>
                <h2>Currency Calculator</h2>
                <form onSubmit={this.handleSubmit}>
                    Enter amount: <input type="number" placeholder='enter amount...' value={this.state.inputVal} onChange={(e) => this.updateInput(e)} />
                    From: <select id="from" value={this.state.from} onChange={(e) => this.updateSelectFrom(e)}>
                        <option value="Select...">Select...</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                        <option value="RUB">RUB</option>
                    </select>
                    To: <select id="to" value={this.state.to} onChange={(e) => this.updateSelectTo(e)}>
                        <option value="Select...">Select...</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                        <option value="RUB">RUB</option>
                    </select>
                    <div className="one"><button>Convert</button></div>
                    <label> Result:</label><b> {this.state.unit}{this.state.result}</b>
                </form>
            </div>
        );
    }
}

export default Calculator;