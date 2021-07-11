import React, {Component} from 'react';
import styles from "./header.less";
import history from '../../history';
import ShoppingCart from "../../assets/Header/shopping-cart.png";
import Logo from "../../assets/logo.png";
import {Badge} from "antd";
import CollapseIcon from "../../assets/Header/collapse.png";
import {connect} from "react-redux";
class Header extends Component {
    state={
        collapse: false,
        isOpenSideMenu:false,
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
        window.addEventListener('reseize', this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ collapse: window.innerWidth < 1024 });
    }
    checkRouter = () => {
        let {pathname} = window.location;
        this.setState({ pathname: pathname })
    }
    jumpToPage=(pathName)=>{
        history.push(pathName);
        this.checkRouter()
    }

    toHomePage=()=>{
        history.push("/");
        this.checkRouter()
    }
    toCheckout=()=>{
        history.push("/checkout");
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
    }

    openSideMenu=()=>{
        const { isOpenSideMenu } = this.state;
        this.setState({ isOpenSideMenu: !isOpenSideMenu });
    }

    render() {
        const {menu,pathname,collapse,isOpenSideMenu}= this.state;
        const {total}=this.props.state;
        // console.log(this.props)
        return (
            <div className={styles.header}>
                {
                    collapse
                    ?
                        <>
                            <div className={styles.logoArea} onClick={this.toHomePage}>
                                <img src={Logo}/>
                            </div>
                            <div className={styles.collapseBtn} onClick={this.openSideMenu}>
                                <img src={CollapseIcon}/>
                            </div>
                            {/*{console.log("isOpenSideMenu",isOpenSideMenu)}*/}
                            <div className={`${isOpenSideMenu?styles.sideBarArea : styles.closeSideBarArea} ${styles.sideBarContainer}`}>
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

                                    <Badge count={total}>
                                        <img src={ShoppingCart} onClick={this.toCheckout}/>
                                    </Badge>
                                </div>
                            </div>

                        </>
                        :<>
                            <div className={styles.logoArea} onClick={this.toHomePage}>
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
                                <Badge count={total}>
                                    <img src={ShoppingCart} onClick={this.toCheckout}/>
                                </Badge>
                            </div>
                        </>
                }


            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        state,

    }
}
export default connect(mapStateToProps)(Header);
