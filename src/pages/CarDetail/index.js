import React, {Component} from 'react';
import styles from "./index.less";
import {carService} from "../../services/CarService";
import {Button,InputNumber,Tag} from "antd";
// import {connect} from "react-redux";
import {filterDetailContent, returnSupplierLogo,returnVehicleLogo} from "./../../function/function";
// import {dispatch} from "jest-circus/build/state";
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

    render() {
        // const pageDetail=this.props.location.state;
        // console.log("pageDetail",this.props)


        const {dispatch,count}=this.props;
        const {carDetail} = this.state;

        console.log("count",count)
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
                            <div className={styles.numberContainer}>
                            <InputNumber min={1} max={100000} defaultValue={1} onChange={this.onNumberChange} />

                            </div>
                            <div className={styles.btnContainer}>
                                <Button className={styles.addToCartBtn} onClick={()=>{dispatch({type:'add'})}}>Add to Cart</Button>
                                <Button className={styles.purchaseBtn}>Purchase</Button>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Index;
// const mapStateToProps = state=>{
//     console.log("state",state)
//     return state.count
// }
// export default connect(mapStateToProps)(Index);
