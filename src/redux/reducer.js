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
                for(let i =0;i<shoppingList.length;i++){
                    if(shoppingList[i]['availabilityId']===action.good.availabilityId){
                        shoppingList[i]['amount']++;
                        return Object.assign({},state,{
                            shoppingList:state.shoppingList,
                            total:state.total+1
                        })
                    }
                    action.good.amount=1;
                       addList.push(action.good)
                        return Object.assign({},state,{
                            shoppingList:state.shoppingList.concat(addList),
                            total:state.total+1
                        })

                }
                // for(let i of shoppingList){
                // if (i.availabilityId!==action.good.availabilityId){
                //     action.good.amount=1;
                //    addList.push(action.good)
                //     return Object.assign({},state,{
                //         shoppingList:state.shoppingList.concat(addList),
                //         total:state.total+1
                //     })
                // } else{
                //     i.amount++;
                //     return Object.assign({},state,{
                //         shoppingList:state.shoppingList,
                //         total:state.total+1
                //     })
                // }
                // }
            }
            return Object.assign({},state,{
                shoppingList:state.shoppingList,
                total:state.total+1
            })
        default:
            return state;
    }
}

export default reducer;
