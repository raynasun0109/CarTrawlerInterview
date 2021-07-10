import React, {Component} from 'react';
import styles from "./footer.less";

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.footerCell}>
                    For CarTrawler Interview Only
                </div>
                <div className={styles.footerCell}>
                    @All Rights Reserved
                </div>
                <div className={styles.footerCell}>
                    Contact Email: <a href="mailto:sunmi@tcd.ie">sunmi@tcd.ie</a>
                </div>
            </div>
        );
    }
}

export default Footer;
