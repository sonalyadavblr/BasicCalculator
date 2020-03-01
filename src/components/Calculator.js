import React from 'react';
import { connect } from 'react-redux';
import { infixEvalution } from '../utils/ExprEvaluator';
import './Calculator.css';


class Calculator extends React.Component
{    
    whenClick = (e) => {
        let input = this.props.input;
        let output = this.props.output;
        let value = e.target.value;
        console.log("value", value);
        
        if (value !== '=' && value !== 'C' && value !== "+/-")
        {
            input += value;
        } else if (value === '=')
        {
            let result = infixEvalution(input);
            if (isNaN(result))
            {   
                console.log("Err::", result);
                output = "Syntax Error";
            } else {
                output = result;
            }
            
        } else if (value === 'C')
        {
            output = '0';
            input = '';
        }
        
        this.props.setInput(input);
        this.props.setOutput(output);
    }
    
    updateUI()
    {
        this.setState({});
    }
    
    render()
    {
        return (
            <div className="calc-layout">
                <div className="input-output-block">
                    <div className="calc-input">{this.props.input}</div>
                    <div className="calc-output">{this.props.output}</div>
                </div>
                <div className="calc-keyboard">
                    <div className="table" >
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="C" onClick={this.whenClick}>C</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="+/-" onClick={this.whenClick}>+/-</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="%" onClick={this.whenClick}>%</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-blue" value="/" onClick={this.whenClick}>&divide;</button>
                        </div>
                    </div>
                    <div className="table" >
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="7" onClick={this.whenClick}>7</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="8" onClick={this.whenClick}>8</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="9" onClick={this.whenClick}>9</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-blue" value="*" onClick={this.whenClick}>&times;</button>
                        </div>
                    </div>
                    <div className="table" >
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="4" onClick={this.whenClick}>4</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="5" onClick={this.whenClick}>5</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="6" onClick={this.whenClick}>6</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-blue" value="-" onClick={this.whenClick}>-</button>
                        </div>
                    </div>
                    <div className="table" >
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="1" onClick={this.whenClick}>1</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="2" onClick={this.whenClick}>2</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="3" onClick={this.whenClick}>3</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-blue" value="+" onClick={this.whenClick}>+</button>
                        </div>
                    </div>
                    <div className="table" >
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="0" onClick={this.whenClick}>0</button>
                        </div>
                        <div className="table-col col-3" >
                            <button className="btn btn-white" value="." onClick={this.whenClick}>.</button>
                        </div>
                        <div className="table-col col-6" >
                            <button className="btn btn-blue" style={{ borderRadius: "30px", width: "80%" }} value="=" onClick={this.whenClick}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        output: state.output,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInput: function (inp) {
            dispatch({
                type: 'SET_INPUT',
                input: inp,
            });
        },
        setOutput: function (out) {
            dispatch({ type: 'SET_OUTPUT', output: out });
        }
    };
}

const func = connect(mapStateToProps, mapDispatchToProps);
export default func(Calculator);