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


    componentDidMount() {
        this.checkRouter()
    }

    checkRouter = () => {
        let {pathname} = window.location;
        this.setState({ pathname: pathname })
    }
    jumpToPage=(pathName)=>{
        history.push(pathName);
        this.checkRouter()
    }

    toCheckout=()=>{
        history.push("/checkout");
    }

    render() {
        const {menu,pathname}= this.state;
        console.log(this.props)
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
                                    <div className={pathname===item.path?styles.activeCell:styles.inActiveCell}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.shoppingArea}>

                    <img src={ShoppingCart} onClick={this.toCheckout}/>
                </div>
            </div>
        );
    }
}

export default Header;
