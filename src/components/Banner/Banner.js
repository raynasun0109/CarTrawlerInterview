import React, {Component} from 'react';
import styles from "./Banner.less";
import BannerImg from "../../assets/About/banner.jpg";
class Banner extends Component {

    render() {
        const {img,text} = this.props;
        return (
            <div className={styles.bannerContainer}>
                <img src={img}/>
                <div className={styles.bannerText}>
                    {text}
                </div>
            </div>
        );
    }
}

export default Banner;
