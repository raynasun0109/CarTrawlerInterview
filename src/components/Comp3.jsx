import React, {Component} from 'react';
import {connect} from "react-redux";

class Comp3 extends Component {
    render() {
        const {count} = this.props;
        console.log("aaaa",this.props)
        return (
            <div>
                comp3
                {count}
                {/*<button onClick={this.handleAdd}>+</button>*/}
                {/*<button onClick={this.handleMins}>-</button>*/}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps)(Comp3);
