import React, {Component} from 'react';
import axios from 'axios';

let getCarListUrl='https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json';

/**
 * @Author Mingyang Sun
 * @Date 10/07/2021
 * @Description: retrieve car list data
 * @Contact: sunmi@tcd.ie
 */
export function carService() {
    return new Promise((resolve,reject)=>{
        axios.get(getCarListUrl)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            })
    })

}

