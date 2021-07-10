import React, {Component} from 'react';
import styles from "./header.less";
import history from '../../history';
import ShoppingCart from "../../assets/Header/shoppingCart.jpg";
import Logo from "../../assets/logo.jpg"
class Header extends Component {
    state={
        menu:[
            {
                name: 'Home',
                path: '/',

            },
            {
                name: 'Car List',
                path: '/car',

            },
            {
                name: 'About Us',
                path: '/about',

            },
        ]

    }

    jumpToPage=(pathName)=>{
        history.push(pathName);
    }


    render() {
        const {menu}= this.state;
        return (
            <div className={styles.header}>
                <div className={styles.logoArea}>
                    <img src={Logo}/>
                </div>
                <div className={styles.menuArea}>
                    {
                        menu.map((item,index)=>{
                            return (
                                <div className={styles.menuCell} key={index} onClick={()=>{this.jumpToPage(item.path)}}>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.shoppingArea}>

                    <img src={ShoppingCart}/>
                </div>
            </div>
        );
    }
}

export default Header;
