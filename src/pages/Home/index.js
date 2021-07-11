import React, {Component} from 'react';
import styles from "./index.less";
import { Carousel,Button,Tag } from 'antd';
import CarouselOne from "./../../assets/Home/carsouel-1.jpg";
import CarouselTwo from "./../../assets/Home/carsouel-2.jpg";
import CarouselThree from "./../../assets/Home/carsouel-3.jpg";
import {carService} from "../../services/CarService";
import {sortDataByETA,returnSupplierLogo} from "../../function/function";
import ScrollToTopOnMount from "../../components/ScrollToTop/ScrollToTop";
class Index extends Component {
    state={
        carList:[],
        carouselContent:[
            {
                img:CarouselOne,
                content:"Top One in Ireland"
            },
            {
                img:CarouselTwo,
                content:"We are the Future of Car Rental Business"
            },
            {
                img:CarouselThree,
                content:"Trust US"
            },
        ]
    }



    componentDidMount(){
        this.fetchCarList()
    }

    fetchCarList=async ()=>{
        const carListRawData=await carService();
        this.setState({carList:sortDataByETA(carListRawData.data)})
    }

    toCarListPage=()=>{
        this.props.history.push("/car")
    }

    jumpToCarDetail=(pageDetail)=>{
        this.props.history.push( {pathname:`/car/${pageDetail.availabilityId}`})
    }
    render() {
        const {carouselContent,carList}= this.state;
        return (
            <div className={styles.container}>
                <ScrollToTopOnMount />
               <div className={styles.carouselContainer}>
                   <Carousel autoplay>
                       {
                           carouselContent.map((item,index)=>{
                               return (
                                   <div className={styles.carouselCell} key={index}>

                                       <div className={styles.text}>
                                           {item.content}
                                       </div>
                                       <img src={item.img} alt="img"/>
                                   </div>
                               )
                           })
                       }
                   </Carousel>
               </div>

                <div className={styles.title}>
                    <div className={styles.titleText}>
                        Car List
                    </div>
                </div>
                <div className={styles.carPreviewContainer}>
                    <div className={styles.carPreviewContent}>
                        {
                            carList.length>0&&carList&&
                            carList.slice(0,3).map((item,index)=>{
                                return (
                                    <div key={index} className={styles.carCard}>
                                        <div className={styles.imgContainer}>
                                            <img alt="img" src={returnSupplierLogo(item.supplier.supplierKey)}/>
                                        </div>
                                        <div className={styles.detailCell}>
                                            <div className={styles.detailTitle}>
                                                Supplier:
                                            </div>
                                            <div className={styles.detailContent}>
                                                {item.supplier.supplierName}
                                            </div>
                                        </div>
                                        <div className={`${styles.categoryCell}`}>
                                            <div className={`${styles.detailTitle} ${styles.categoryTitle}`}>
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
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.carMore} onClick={this.toCarListPage}>
                        <Button>
                        More
                        </Button>
                    </div>
                </div>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        About Us
                    </div>
                </div>
                <div className={styles.aboutContent}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

            </div>
        );
    }
}

export default Index;
