import Cart from "../restaurant/Cart"

import "./Header.css"
import logo from "./logo.png"
import { useState } from "react"

import Main from '../main/Main';
import Menu from '../restaurant/Menu';

const Header = ({orderData,menuArrData}) =>{

    const [order, setOrder] = useState(orderData)

    

    return(
        <div>
            <header>
            <nav className="nav-bar">
                <a href="" ><img src={logo} className="logo"/></a>
                <ul className="nav-bar-list">
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Drinks</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <Cart  order={order} />
            </nav>
        </header>

        <Main>
            <Menu data={menuArrData}  order={order} setOrder = {setOrder} />        
        </Main>

        </div>
        
    )
}

export default Header 