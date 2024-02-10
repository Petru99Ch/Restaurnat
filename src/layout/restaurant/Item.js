



const Item = ({data,order, setOrder}) =>{
     

    const orderSetHandler =() =>{
        setOrder(order.addItem({
            itemId: data.id, quantity:1
        }))
    }
                      
    return(
        <li>
            <h2>{data.name}</h2>
            <img src={data.image}></img>
            <p>{data.price}</p>
            <button onClick={orderSetHandler}>Order</button>
        </li>
    )
}

export default Item