import React, {Component} from 'react';
import styles from "./index.less";
import {carService} from "../../services/CarService";
import {returnSupplierLogo, sortDataByETA,filterSupplierName,
    filterProductType,transferSubCategory,transferProductType,
    filterSubCategory,sortByPrice} from "../../function/function";
import {Button, message, Tag,Input,Radio} from "antd";
import Banner from "../../components/Banner/Banner";
import BannerImg from "./../../assets/CarList/banner.jpg";
import {addProduct} from "../../redux/action";
import {connect} from "react-redux";
import ScrollToTopOnMount from "../../components/ScrollToTop/ScrollToTop";

const { Search } = Input;
class Index extends Component {
    state={
        carList:[],
        productType:["Standard","Other"],
        chosenProductType:"",
        subCategory:["Highly Recommended","Most Popular"],
        chosenSubCategory:"",
        sortBy:"",
        sortByChoice:[
            {
                name:"Price",
                content:['From Low to High',"From High to Low"]
            },
            {
                name:"ETA",
                content:['From Low to High',"From High to Low"]
            }
            ]
    }
    componentDidMount(){
        this.fetchCarList()
    }

    fetchCarList=async ()=>{
        const carListRawData=await carService();
        this.setState({carList:sortDataByETA(carListRawData.data)})
    }
    jumpToCarDetail=(pageDetail)=>{
        this.props.history.push( {pathname:`/car/${pageDetail.availabilityId}`})
    }

    //search bar
    onSearch = (e) =>{
        this.filterData(e);
    }
    reset=()=>{
        this.fetchCarList()
    }

    //filter input from search bar
    filterData=(keyword)=>{
        const {carList}=this.state;
        const searchList=filterSupplierName(keyword,carList);
        this.setState({carList:searchList})
    }
    onProductTypeChange=(e)=>{
        const {carList}=this.state;
        const searchList=filterProductType(transferProductType(e.target.value),carList);
        this.setState({carList:searchList})
    }

    onSubCategoryChange=(e)=>{
        const {carList}=this.state;
        const searchList=filterSubCategory(transferSubCategory(e.target.value),carList);
        this.setState({carList:searchList})
    }

    onSortChange=(e,name)=>{
        const {carList}=this.state;
        if(name==="Price"){
            const searchList=sortByPrice(carList,e.target.value);
            this.setState({carList:searchList})
        } else{
            const searchList=sortDataByETA(carList,e.target.value);

            this.setState({carList:searchList})
        }

    }
    render() {
        const {carList,productType,subCategory,sortByChoice}= this.state;

        return (
            <div className={styles.container}>
                <ScrollToTopOnMount/>
                <Banner text="Car List" img={BannerImg}/>

                <div className={styles.filterArea}>
                    <Search className={styles.searchBar} placeholder="Please Input Supplier Name" onSearch={this.onSearch} allowClear/>
                    <div className={styles.filterCell}>
                        <div className={styles.filterName}>
                            Product Type:
                        </div>
                        <div className={styles.filterBox}>
                            <Radio.Group options={productType} onChange={this.onProductTypeChange} />

                        </div>
                    </div>
                   <div className={styles.filterCell}>
                        <div className={styles.filterName}>
                            Sub Category:
                        </div>
                        <div className={styles.filterBox}>
                            <Radio.Group options={subCategory} onChange={this.onSubCategoryChange} />

                        </div>
                    </div>
                    <div className={styles.filterCell}>
                        <div className={styles.filterName}>
                            Sort By:
                        </div>
                        <div className={styles.filterBox}>
                            {
                                sortByChoice.map((item,index)=>{
                                    return (
                                        <div key={index} className={styles.sortArea}>
                                            <div className={styles.title}>
                                                {item.name}:
                                            </div>
                                            <Radio.Group options={item.content} onChange={(...arg)=>{this.onSortChange(...arg,item.name)}} />

                                        </div>

                                    )
                                })
                            }


                        </div>

                    </div>
                    <Button className={styles.reSetBtn} onClick={this.reset}>Reset</Button>
                </div>
                <div className={styles.carPreviewContainer}>
                    <div className={styles.carPreviewContent}>
                        {
                            carList.length>0&&carList&&
                            carList.map((item,index)=>{
                                return (
                                    <div key={index} className={styles.carCard}>
                                        <div className={styles.left}>
                                            <div className={styles.imgContainer}>
                                                <img alt="img" src={returnSupplierLogo(item.supplier.supplierKey)}/>
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
                                            <Button className={styles.addToCartBtn} onClick={()=>{this.props.addProduct(item)}}>
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
const mapDispatchToProps=(dispatch)=>{
    return {
        addProduct(item){
            message.success("Added Successfully")
            dispatch(addProduct(item))
        },
    }
}
export default connect(null,mapDispatchToProps)(Index);
