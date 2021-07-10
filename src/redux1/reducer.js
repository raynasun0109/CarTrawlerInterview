const initState={
    count:100,
}

const reducer1=(state=initState,action)=>{
    switch (action.type) {
        case "increment":
            return Object.assign({},state,{
                count:state.count+1
            })
        case "decrement":
            return Object.assign({},state,{
                count:state.count-1
            })
        default:
            return state;
    }
}

export default reducer1;
