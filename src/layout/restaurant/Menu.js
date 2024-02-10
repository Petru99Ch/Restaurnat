import Item from "./Item"
import "./Menu.css"

import { useState } from "react"

// let search = document.getElementById("input").value


const Menu = ({data, order, setOrder}) =>{
    
    

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

    const filterItem = (e) =>{
        let name = e.target.value
        let search = document.getElementById("search")
        if(name.length >= 3){
            setItemsData(itemsData.filter(
                item => item.name.toLowerCase().includes(name.toLowerCase())
            ))
            
            
            if(itemsData.length >= 1){
                search.innerHTML = `Result for search: ${name}`
                
            } else{
                search.innerHTML = `Result for search: " ${name} " is not found`
            }

        } else {
            setItemsData(data)
            search.innerHTML = ``
        }
       
    }

       
        return(
            <div className="wrapper">
                <div className="button">
                    <button onClick={sortItemDesc}>Descend</button> 
                    <button onClick={sortItemAsc}>Ascend</button> 
                    <button onClick={sortUniversal} className={val ? "Desc" : "Asce"}></button>

                    <input id="input" placeholder="search in menu..." onKeyUp={filterItem} />
                    
                </div>
                <p id="search" className="textSearch"></p>

                <ul className="menu">
                {itemsData.map(itemData => <Item key ={itemData.id} data = {itemData} order={order} setOrder={setOrder} />)}   
                    
                </ul>
            </div>
        )
   
   
}

export default Menu 