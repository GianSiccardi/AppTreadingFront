export const calculateProfile =(order)=>{
if( order && order.orderItem?.buyPrice && order.orderItem?.sellPrice
){
    return order.orderItem?.selPrice-order.orderItem?.buyPrice
}

return"-"
}