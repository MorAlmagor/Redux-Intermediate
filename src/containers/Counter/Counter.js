import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onReduce5Counter}  />
                <hr />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>store results</button>
                <ul>
                    {this.props.storedResults.map(item => {
                       return <li key={item.id} onClick={() => this.props.onDeleteResults(item.id)}>{item.value}</li>
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd5Counter: () => dispatch({type: actionTypes.ADD5, value:5}),
        onReduce5Counter: () => dispatch({type: actionTypes.REDUCE5, value:5}),
        onStoreResults: (counter) => dispatch({type: actionTypes.STORE_RESULT, counter:counter}),
        onDeleteResults: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultEleId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);