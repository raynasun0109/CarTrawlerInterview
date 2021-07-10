import React, {Component} from 'react';
import store from "../redux1/store";
import {handleDecrement,handleIncrement} from "../redux1/action";

class Redux1Comp extends Component {

    handleAdd=()=>{
        const action=handleIncrement()
        store.dispatch(action)
    }
    handleMins=()=>{
        const action=handleDecrement()
        store.dispatch(action)
    }

    componentDidMount() {
        store.subscribe(()=>{
            console.log(store.getState())
            this.setState({})
        })
    }


    render() {
        // console.log(store.getState())
        const {count}=store.getState()
        return (
            <div>
                {count}
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleMins}>-</button>
            </div>
        );
    }
}

export default Redux1Comp;
