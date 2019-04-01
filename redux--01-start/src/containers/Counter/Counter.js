import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import  {counterActionCreators, resultActionCreators } from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0,
        results: []
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.results.map((result,) => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                            {result.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        results: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(counterActionCreators.increment()),
        onDecrementCounter: () => dispatch(counterActionCreators.decrement()),
        onAddCounter: () => dispatch(counterActionCreators.add(5)),
        onSubtractCounter: () => dispatch(counterActionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(resultActionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(resultActionCreators.deleteResult(id)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);