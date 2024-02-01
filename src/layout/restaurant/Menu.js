import Item from "./Item"
import "./Menu.css"

import { useState } from "react"

const Menu = ({data}) =>{

    let [itemsData, setItemsData] = useState(data) 

    const sortItemDesc = () =>{
        itemsData.sort((i1, i2) => i2.price - i1.price)
        setItemsData([...itemsData])

        
    }

    const sortItemAsc = () =>{
        itemsData.sort((i1, i2) => i1.price - i2.price)
        setItemsData([...itemsData])

        
    }


    let [val, setDesc] = useState(false)
    const sortUniversal = () =>{     
        setDesc(!val)
        val ?  sortItemDesc() : sortItemAsc()        
    }
       
        return(
            <div className="wrapper">
                <div className="button">
                    <button onClick={sortItemDesc}>Descend</button> 
                    <button onClick={sortItemAsc}>Ascend</button> 
                    <button onClick={sortUniversal} className={val ? "Desc" : "Asce"}></button>
                </div>
                <ul className="menu">
                {itemsData.map(itemData => <Item key ={itemData.id} data = {itemData} />)}   
                    
                </ul>
            </div>
        )
   
   
}

export default Menu 