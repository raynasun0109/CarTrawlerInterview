const initState={
    count:100,
    shoppingList:[]
}

const reducer1=(state=initState,action)=>{
    switch (action.type) {
        case "addProduct":
            // const addList=[];
            const addList=state.shoppingList;
            addList.push(action.good)
            return addList
            // const origin=state.shoppingList;
            // const AddLIST = JSON.parse(JSON.stringify(state.shoppingList))
            // const addGoods = AddLIST.find(item => item.id === action.good.id)
            // if (addGoods) {
            //     console.log("repeat")
                // addGoods.num += action.goods.num
            // } else {
            //     AddLIST.push(action.good)
            // }
            // return AddLIST
           //  console.log("one",one)
           //  // const addList=JSON.parse(JSON.stringify(state.shoppingList))
           //  console.log("action",action,state)
           //  addList.push(action.good)
           //  const all=origin.concat(addList)
           //  console.log("addlist",addList)
           //
           // // return all
           //  // return addList
           //  return Object.assign({},state,{
           //      shoppingList:state.shoppingList.concat(addList)
           //  })
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
