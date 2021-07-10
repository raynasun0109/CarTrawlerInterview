import FreeNow from "../assets/Suppliers/supplier-freenow.svg";
import Bolt from "../assets/Suppliers/supplier-bolt.svg";
import DefaultSupplier from "../assets/Suppliers/DefaultSupplier.jpg"
import Accessible from "../assets/Suppliers/vehicle-other-accessible.svg";
import Eco from "../assets/Suppliers/vehicle-other-eco.svg";
import MiniBus from "../assets/Suppliers/vehicle-standard-minibus.svg";
import sedan from "../assets/Suppliers/vehicle-standard-sedan.svg";
import suv from "../assets/Suppliers/vehicle-standard-suv.svg";
import DefaultVehicleLogo from "../assets/Suppliers/DefaultVehicleLogo.jpg";

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: Sort data by ETA from small to large
 * @Contact: sunmi@tcd.ie
 */
export function sortDataByETA(data){
   return data.sort(function (a,b) {
        return a.eta - b.eta;
    })
}

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
