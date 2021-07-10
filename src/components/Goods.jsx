import React, {Component} from 'react';
import store from "../redux1/store";

class Goods extends Component {
    componentDidMount() {
        store.subscribe(()=>{
            console.log(store.getState())
            this.setState({})
        })
    }
    render() {
        const {count}=store.getState()
        return (
            <div>
                GOod
                {count}
            </div>
        );
    }
}

export default Goods;
