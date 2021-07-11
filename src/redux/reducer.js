import {calculateAmount,calculateAmountAfterRemoveItem} from "./../function/function"
const initState={
    shoppingList:[],
    total:0,
    totalAmount:0
}

const reducer=(state=initState,action)=>{
    switch (action.type) {
        case "removeProduct":
            const list=state.shoppingList;

            for(let i of list){
                if (i.availabilityId===action.good.availabilityId){
                    if (i.amount>1){
                        i.amount--;
                        return Object.assign({},state,{
                            shoppingList:state.shoppingList,
                            total:state.total-1,
                            totalAmount:calculateAmountAfterRemoveItem(action.good,state.totalAmount)
                        })
                    } else{
                        const filterdList=list.filter(function (value, index, array) {
                            return value.availabilityId !== action.good.availabilityId ;

                        });
                        return Object.assign({},state,{
                            shoppingList:filterdList,
                            total:state.total-1,
                            totalAmount:calculateAmountAfterRemoveItem(action.good,state.totalAmount)
                        })
                    }
                }
            }
            break;

        case "addProduct":
            const addList=[];
            const {shoppingList} =state;

            //if the original shopping list is empty
            if (shoppingList.length===0){
                action.good.amount=1;
                   addList.push(action.good)
                return Object.assign({},state,{
                    shoppingList:state.shoppingList.concat(addList),
                    total:state.total+1,
                    totalAmount:calculateAmount(state.shoppingList.concat(addList))
                })
            } else {

                //if the original shopping list is empty
                //check whether the same item already added to shopping list or not

                const itemIndex=shoppingList.map(obj => obj.availabilityId).indexOf(action.good.availabilityId);

                if (itemIndex!==-1){
                    shoppingList[itemIndex]['amount']++;
                    return Object.assign({},state,{
                        shoppingList:state.shoppingList,
                        total:state.total+1,
                        totalAmount:calculateAmount(state.shoppingList)
                    })
                } else {
                    action.good.amount=1;
                    addList.push(action.good)
                    return Object.assign({},state,{
                        shoppingList:state.shoppingList.concat(addList),
                        total:state.total+1,
                        totalAmount:calculateAmount(state.shoppingList.concat(addList))
                    })
                }
            }

        default:
            return state;
    }
}

export default reducer;
