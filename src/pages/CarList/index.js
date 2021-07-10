import React, {Component} from 'react';
import styles from "./index.less";
import {carService} from "../../services/CarService";
import {returnSupplierLogo, sortDataByETA} from "../../function/function";
import {Button, Tag} from "antd";
import history from "../../history";
import Banner from "../../components/Banner/Banner";
import BannerImg from "./../../assets/CarList/banner.jpg";
class Index extends Component {
    state={
        carList:[]
    }
    componentDidMount(){
        this.fetchCarList()
    }

    fetchCarList=async ()=>{
        const carListRawData=await carService();
        this.setState({carList:sortDataByETA(carListRawData.data)})
    }
    jumpToCarDetail=(pageDetail)=>{
        history.push( {pathname:`/car/${pageDetail.availabilityId}`})
    }
    render() {
        const {carList}= this.state;

        return (
            <div className={styles.container}>
                <Banner text="Car List" img={BannerImg}/>
                <div className={styles.carPreviewContainer}>
                    <div className={styles.carPreviewContent}>
                        {
                            carList.length>0&&carList&&
                            carList.map((item,index)=>{
                                return (
                                    <div key={index} className={styles.carCard}>
                                        <div className={styles.left}>
                                            <div className={styles.imgContainer}>
                                                <img src={returnSupplierLogo(item.supplier.supplierKey)}/>
                                            </div>
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

                                        <div className={styles.detailPageBtn}>
                                            <Button className={styles.detailBtn} onClick={()=>{this.jumpToCarDetail(item)}}>
                                                Details
                                            </Button>
                                            <Button className={styles.addToCartBtn} onClick={()=>{this.jumpToCarDetail(item)}}>
                                                Add To Cart
                                            </Button>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
