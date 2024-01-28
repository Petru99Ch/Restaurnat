import Item from "./Item"
import "./Menu.css"

const Menu = (props) =>{
    let data = props.data    
        return(
            <ul className="menu">
                <Item data ={data[0]} />
                <Item data ={data[1]} />
                <Item data ={data[2]} />
                <Item data ={data[3]} />
            </ul>
        )
   
   
}

export default Menu 