import React, {Component} from 'react';
import styles from "./index.less";
import BannerImg from "./../../assets/About/banner.jpg";
import Banner from "../../components/Banner/Banner";
import ImgOne from "../../assets/About/img1.png";
import ImgSecond from "../../assets/About/img2.png"
class Index extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Banner text="About Us" img={BannerImg}/>
                <div className={styles.contentContainer}>
                    <div className={`${styles.contentCell} ${styles.cultureCell}`}>
                        <div className={styles.left}>
                            <img src={ImgOne}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                Our Culture
                            </div>
                            <div className={styles.detail}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            </div>
                    </div>
                    <div className={`${styles.contentCell} ${styles.missionCell}`}>

                        <div className={styles.right}>
                            <div className={styles.title}>
                                Our Mission
                            </div>
                            <div className={styles.detail}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        </div>
                        <div className={styles.left}>
                            <img src={ImgSecond}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
