import React, {Component} from 'react';
import {handleDecrement,handleIncrement,addProduct} from "../redux/action";
import store from "../redux1/store";
import {connect} from 'react-redux';


class Comp2 extends Component {

    handleAdd=()=>{
        console.log(this.props)
        // const action=handleIncrement()
        // store.dispatch(action)
        const {add}=this.props;
        add()
    }
    handleMins=()=>{
        // const action=handleDecrement()
        // store.dispatch(action)
        console.log(this.props)
        const {reduce}=this.props;
        reduce()
    }

    componentDidMount() {
        // store.subscribe(()=>{
        //     console.log(store.getState())
        //     this.setState({})
        // })
    }

    add=()=>{

    }

    render() {
        return (
            <div>
                comp2
                <button onClick={()=>{this.props.addGood({name:"999"})}}>product</button>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleMins}>-</button>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addGood(item){
            console.log("item",item)
            const action=addProduct(item)
            dispatch(addProduct(item))
        },
        add(){
            const action=handleIncrement()
            dispatch(action)

        },
        reduce(){
            const action=handleDecrement()
            dispatch(action)
        }
    }
}

export default connect(null,mapDispatchToProps)(Comp2);
