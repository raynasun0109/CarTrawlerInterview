import React, {Component} from 'react';
import { Result, Button } from 'antd';
import styles from "./index.less";
class Index extends Component {
    toHomePage=()=>{
        this.props.history.push("/");
    }
    render() {
        return (
            <div className={styles.container}>
                <Result
                    className={styles.noFound}
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" className={styles.notFoundBtn} onClick={this.toHomePage}>Back Home</Button>}
                />
            </div>
        );
    }
}

export default Index;
