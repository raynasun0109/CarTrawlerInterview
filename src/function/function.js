import FreeNow from "../assets/Suppliers/supplier-freenow.svg";
import Bolt from "../assets/Suppliers/supplier-bolt.svg";
import DefaultSupplier from "../assets/Suppliers/DefaultSupplier.png"
import Accessible from "../assets/Suppliers/vehicle-other-accessible.svg";
import Eco from "../assets/Suppliers/vehicle-other-eco.svg";
import MiniBus from "../assets/Suppliers/vehicle-standard-minibus.svg";
import sedan from "../assets/Suppliers/vehicle-standard-sedan.svg";
import suv from "../assets/Suppliers/vehicle-standard-suv.svg";
import DefaultVehicleLogo from "../assets/Suppliers/DefaultVehicleLogo.png";

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: return the supplier logo based on the supplierKey
 * @Contact: sunmi@tcd.ie
 */
export function returnSupplierLogo(key) {
    switch (key) {
        case "bolt":
            return Bolt;
        case "freenow":
            return FreeNow;
        default:
            return DefaultSupplier;

    }
}

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: return the supplier logo based on the vehicleType
 * @Contact: sunmi@tcd.ie
 */
export function returnVehicleLogo(key) {
    switch (key) {
        case "ECO":
            return Eco;
        case "MINIBUS":
            return MiniBus;
        case "ACCESSIBLE":
            return Accessible;
        case "SUV":
            return suv;
        case "SEDAN":
            return sedan;
        default:
            return DefaultVehicleLogo;

    }
}

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: Filter the single car detail based on the id
 * @Contact: sunmi@tcd.ie
 */
export function filterDetailContent(id,data) {
    return data.filter(item=> item.availabilityId === id)[0]
}

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: Filter search bar content
 * @Contact: sunmi@tcd.ie
 */
export function filterSupplierName(keyword,data) {
    const filterdContent= data.filter(function (value, index, array) {

        return value.supplier.supplierName === keyword.toUpperCase() ;
    });
    return filterdContent
}

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: Filter search bar content
 * @Contact: sunmi@tcd.ie
 */
export function filterProductType(keyword,data) {
    const filteredContent= data.filter(function (value, index, array) {

        return value.category.productType === keyword.toUpperCase() ;
    });
    return filteredContent
}
export function filterSubCategory(keyword,data) {
    const filteredContent= data.filter(function (value, index, array) {

        return value.category.subCategory === keyword.toUpperCase() ;
    });
    return filteredContent
}
/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: transfer the product type to certain format
 * @Contact: sunmi@tcd.ie
 */
export function transferProductType(key) {
    switch (key) {
        case "Standard":
            return "STANDARD";
        case "Other":
            return "OTHER";
        default:
            return "";
    }
}

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: transfer the product type to certain format
 * @Contact: sunmi@tcd.ie
 */
export function transferSubCategory(key) {
    switch (key) {
        case "Most Popular":
            return "MOST_POPULAR";
        case "Highly Recommended":
            return "HIGHLY_RECOMMENDED";
        default:
            return "";
    }
}

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: Input the shopping cart list and calculate the total amount based on different currency
 * @Contact: sunmi@tcd.ie
 */
export function calculateAmount(data) {
    const amount=[];

    const hashMap=new Map();

    for (let i =0;i<data.length;i++){
        if(hashMap.has(data[i]['price']['currency'])){
            hashMap.set(data[i]['price']['currency'],hashMap.get(data[i]['price']['currency'])+(data[i]['price']['amount'])*data[i]['amount'])
        } else{
            hashMap.set(data[i]['price']['currency'],(data[i]['price']['amount'])*data[i]['amount']);
        }
    }


    //reorganized the data to certain format
    for (let [key, value] of hashMap.entries()) {
        const obj={
            amount:value,
            currency:key
        }

        amount.push(obj)
    }

    return amount
}

/**
 * @Author Mingyang Sun
 * @Date 11/07/2021
 * @Description: Recalculate the amount after remove the item
 * @Contact: sunmi@tcd.ie
 */
export function calculateAmountAfterRemoveItem(removedItem,data) {

    for (let i of data){
        if(i.currency===removedItem.price.currency){
            i.amount-=removedItem.price.amount
        }
    }

    return data
}

/**
 * @Author Mingyang Sun
 * @Date 11/07/2021
 * @Description: Sort car list by ETA from either high to low or low to high
 * @Contact: sunmi@tcd.ie
 */
export function sortDataByETA(data,value) {

    if (value==="From High to Low") {
        return data.sort(function (a, b) {
            return b.eta - a.eta;
        })
    }else {
        return data.sort(function (a, b) {
            return a.eta - b.eta;
        })
    }

}

/**
 * @Author Mingyang Sun
 * @Date 11/07/2021
 * @Description: Sort car list by price from either high to low or low to high
 * @Contact: sunmi@tcd.ie
 */
export function sortByPrice(data,value) {
    if (value==="From High to Low") {
        return data.sort(function (a, b) {
            return b.price.amount - a.price.amount;
        })
    }else {
        return data.sort(function (a, b) {
            return a.price.amount - b.price.amount;
        })
    }
}
