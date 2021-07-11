import React, {Component} from 'react';
import styles from "./index.less"
import {connect} from "react-redux";
import {returnSupplierLogo,calculateAmount} from "../../function/function";
import {Tag,message,Button} from "antd";
import {addProduct,removeProduct} from "../../redux/action";
import history from "../../history";
import ScrollToTopOnMount from "../../components/ScrollToTop/ScrollToTop";
import EmptyImg from "../../assets/Checkout/Empty.png"
class Index extends Component {

    state={
        amount:[
            {
            currency:"EUR",
            amount:0
        }
        ]
    }

    toCarList=()=>{
        history.push("/car")
    }

    componentDidMount() {
        const {shoppingList}=this.props.state;
        this.setState({amount:calculateAmount(shoppingList)})
    }

    placeOrder=()=>{
        message.success("Place order successfully, now jump to home page")
        history.push("/")
    }

    render() {
        const {amount}=this.state;
        const {shoppingList}=this.props.state;
        // console.log(777777,shoppingList)
        {console.log(22222222,this.props)}
        return (
            <div className={styles.container}>
                <ScrollToTopOnMount />
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        Checkout Page
                    </div>
                </div>
                {
                    shoppingList.length!==0
                    ?
                        <div className={styles.checkoutListContainer}>
                            {
                                shoppingList&&
                                shoppingList.map((item,index)=>{
                                    return (
                                        <div key={index} className={styles.checkoutCell}>
                                            <div className={styles.left}>
                                                <img src={returnSupplierLogo(item.supplier.supplierKey)}/>
                                            </div>
                                            <div className={styles.right}>
                                                <div className={styles.detailCell}>
                                                    <div className={styles.detailTitle}>
                                                        Supplier:
                                                    </div>
                                                    <div className={styles.detailContent}>
                                                        {item.supplier.supplierName}
                                                    </div>
                                                </div>
                                                <div className={`${styles.detailCell}`}>
                                                    <div className={`${styles.detailTitle}`}>
                                                        Category:
                                                    </div>
                                                    <div className={styles.detailContent}>

                                                        <Tag color="#01c0f2"> {item.category.productType}</Tag>
                                                        <Tag color="#01c0f2"> {item.category.vehicleType}</Tag>

                                                    </div>
                                                </div>
                                                <div className={styles.detailCell}>
                                                    <div className={styles.detailTitle}>
                                                        ETA:
                                                    </div>
                                                    <div className={styles.detailContent}>
                                                        {item.eta}
                                                    </div>
                                                </div>
                                                <div className={styles.detailCell}>
                                                    <div className={styles.detailTitle}>
                                                        Price:
                                                    </div>
                                                    <div className={styles.detailContent}>
                                                        {item.price.currency} {item.price.amount}
                                                    </div>
                                                </div>
                                                <div className={styles.detailCell}>
                                                    <div className={styles.detailTitle}>
                                                        Amount:
                                                    </div>
                                                    <div className={styles.detailContent}>
                                                        <div className={styles.minusContainer} onClick={()=>{this.props.removeProduct(item)}}>
                                                            <div className={styles.minus}>-</div>
                                                        </div>
                                                        {item.amount}
                                                        <div className={styles.addContainer} onClick={()=>{this.props.addProduct(item)}}>
                                                            <div className={styles.add}>+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.detailCell}>
                                                    <div className={styles.detailTitle}>
                                                        Total Price:
                                                    </div>
                                                    <div className={styles.detailContent}>
                                                        {item.price.currency} {item.amount*item.price.amount}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        :
                        <div className={styles.emptyContainer}>
                            <img src={EmptyImg}/>
                            <div className={styles.content}>
                                Your shopping cart is empty
                            </div>
                            <div className={styles.chooseMore} onClick={this.toCarList}>
                                Click here to choose more
                            </div>
                        </div>
                }
                {
                    shoppingList.length!==0 &&
                        <div className={styles.listBottom}>
                            <div className={styles.totalContainer}>
                                <div className={styles.totalTitle}>
                                    Total:
                                </div>
                                <div className={styles.totalAmount}>

                                    {
                                        amount.map((item,index)=>{
                                            return (
                                                <div key={item} className={styles.amountCell}>
                                                    {item.currency} {item.amount}
                                                    {index!==amount.length-1?"+":""}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        <div className={styles.placeOrderContainer}>
                            <Button className={styles.text} onClick={this.placeOrder}>

                            Place an order
                            </Button>
                        </div>
                        </div>
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
const mapDispatchToProps=(dispatch)=>{
    return {
        addProduct(item){
            console.log("item",item)
            message.success("Added Successfully")
            dispatch(addProduct(item))
        },
        removeProduct(item){
            console.log("item",item)
            message.success("Removed Successfully")
            dispatch(removeProduct(item))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
