import React, {Component} from 'react';
import styles from "./index.less";
import {carService} from "../../services/CarService";
import {Button, InputNumber, message, Tag} from "antd";
import {filterDetailContent, returnSupplierLogo,returnVehicleLogo} from "./../../function/function";
import {connect} from "react-redux";
import {addProduct} from "../../redux/action";
import history from "../../history";
class Index extends Component {
    state={
        carDetail:[]

    }

    componentDidMount() {
        this.renderDetailPageContent();
    }

    renderDetailPageContent=async()=>{

        const {id}=this.props.match.params;

        const carListRawData=await carService();

        const filteredContent = filterDetailContent(id,carListRawData.data)

        console.log("final",filteredContent)
        this.setState({carDetail:filteredContent})
    }

    onNumberChange=(value)=>{
        console.log('changed', value);
    }

    returnProductBagsDetail=()=>{
        const {carDetail} = this.state;
        let myDom;
        if (carDetail.product&&carDetail.product.bags){

            myDom=<>{
                Object.keys(carDetail.product.bags).map((key,value)=>{
                    return  <div className={styles.productDetailCell} key={value}>
                        <Tag color="#01c0f2">
                        {key}: {carDetail.product.bags[key]}
                        </Tag>
                        </div>

                })
            }
            </>
        }


        return myDom

    }

    ToCheckout=()=>{
        history.push('/checkout')
    }

    render() {
        // const pageDetail=this.props.location.state;
        // console.log("pageDetail",this.props)


        const {dispatch,count}=this.props;
        const {carDetail} = this.state;
        const {shoppingList}=this.props;

        console.log("count",shoppingList)
        return (
            <div className={styles.container}>
                <div className={styles.basicContent}>
                    <div className={styles.left}>
                        {
                            carDetail.supplier&&
                            <img src={returnSupplierLogo(carDetail.supplier.supplierKey)}/>
                        }
                    </div>


                    <div className={styles.right}>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Supplier:
                            </div>
                            <div className={styles.detailContent}>
                                {
                                    carDetail.supplier&&
                                    carDetail.supplier.supplierName
                                }

                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                ETA:
                            </div>
                            <div className={styles.detailContent}>
                                {carDetail.eta}
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Product Type:
                            </div>
                            <div className={styles.detailContent}>
                                {carDetail.category&&carDetail.category.productType}
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Product Detail:
                            </div>
                            <div className={`${styles.detailContent}`}>

                                <div className={styles.productDetailCell}>
                                    <Tag color="#01c0f2">Max Pax: {carDetail.product&&carDetail.product.maxPax}</Tag>
                                </div>
                                <div className={styles.productDetailCell}>
                                    <Tag color="#01c0f2"> Max Seats: {carDetail.product&&carDetail.product.maxSeats}</Tag>
                                </div>
                                {
                                    this.returnProductBagsDetail()
                                }
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Vehicle Type:
                            </div>
                            <div className={styles.detailContent}>

                                {carDetail.category&&
                                    <img src={returnVehicleLogo(carDetail.category.vehicleType)}/>}
                                {carDetail.category&&carDetail.category.vehicleType}
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Price:
                            </div>
                            <div className={styles.detailContent}>
                                {carDetail.price && carDetail.price.currency} {carDetail.price &&carDetail.price.amount}

                            </div>
                        </div>
                        <div className={styles.paymentContainer}>
                            <div className={styles.payment}>
                            {/*<div className={styles.numberContainer}>*/}
                            {/*<InputNumber min={1} max={100000} defaultValue={1} onChange={this.onNumberChange} />*/}

                            {/*</div>*/}
                            <div className={styles.btnContainer}>
                                <Button className={styles.addToCartBtn} onClick={()=>{this.props.addProduct(carDetail)}}>Add to Cart</Button>
                                <Button className={styles.purchaseBtn} onClick={this.ToCheckout}>Process To Checkout</Button>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addProduct(item){
            message.success("Added Successfully")
            dispatch(addProduct(item))
        },
    }
}
export default connect(null,mapDispatchToProps)(Index);
