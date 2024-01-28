



const Item = (props) =>{
    let data = props.data 
                      
    return(
        <li>
            <h2>{data.name}</h2>
            <img src={data.image}></img>
            <p>{data.price}</p>
        </li>
    )
}

export default Item