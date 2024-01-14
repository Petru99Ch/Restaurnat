import "./Header.css"
import logo from "./logo.png"

const Header = () =>{
    return(
        <header>
            <nav className="nav-bar">
                <a href="" ><img src={logo} className="logo"/></a>
                <ul className="nav-bar-list">
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Drinks</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 