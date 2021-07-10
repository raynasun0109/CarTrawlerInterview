export const handleIncrement=()=>{
    return {
        type:"increment"
    }
}
export const addProduct=(item)=>{
    return {
        type:"addProduct",
        good:item
    }
}
export const handleDecrement=()=>{
    return {
        type:"decrement"
    }
}
