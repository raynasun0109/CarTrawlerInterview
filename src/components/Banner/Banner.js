import React, {Component} from 'react';
import styles from "./Banner.less";
class Banner extends Component {

    render() {
        const {img,text} = this.props;
        return (
            <div className={styles.bannerContainer}>
                <img src={img} alt="img"/>
                <div className={styles.bannerText}>
                    {text}
                </div>
            </div>
        );
    }
}

export default Banner;
