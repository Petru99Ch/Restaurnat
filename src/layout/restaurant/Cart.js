

const Cart = ({order}) =>{
    
    return(
        <a href="#"> {order.items.length == 0 ? "Empty" : `${order.items.length} items`}</a>
    )
}

export default Cart