const initState={
    shoppingList:[],
    total:0,
}

const reducer=(state=initState,action)=>{
    switch (action.type) {
        case "removeProduct":
            const list=state.shoppingList;

            for(let i of list){
                if (i.availabilityId===action.good.availabilityId){
                    if (i.amount>1){
                        i.amount--;
                    } else{
                        const filterdList=list.filter(function (value, index, array) {
                            return value.availabilityId !== action.good.availabilityId ;

                        });
                        return Object.assign({},state,{
                            shoppingList:filterdList,
                            total:state.total-1
                        })
                    }
                }
            }

            return Object.assign({},state,{
                shoppingList:state.shoppingList,
                total:state.total-1
            })

        case "addProduct":
            const addList=[];

            const {shoppingList} =state;

            console.log("shoppingList",shoppingList)
            //if the original shopping list is empty
            if (shoppingList.length===0){
                action.good.amount=1;
                   addList.push(action.good)
                return Object.assign({},state,{
                    shoppingList:state.shoppingList.concat(addList),
                    total:state.total+1
                })
            } else {

                //if the original shopping list is empty
                //check whether the same item already added to shopping list or not

                const itemIndex=shoppingList.map(obj => obj.availabilityId).indexOf(action.good.availabilityId);

                if (itemIndex!==-1){
                    shoppingList[itemIndex]['amount']++;
                    return Object.assign({},state,{
                        shoppingList:state.shoppingList,
                        total:state.total+1
                    })
                } else {
                    action.good.amount=1;
                    addList.push(action.good)
                    return Object.assign({},state,{
                        shoppingList:state.shoppingList.concat(addList),
                        total:state.total+1
                    })
                }

            }
        default:
            return state;
    }
}

export default reducer;
