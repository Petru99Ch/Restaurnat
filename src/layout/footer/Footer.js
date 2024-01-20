import "./Footer.css"
import Chat from "./chat/Chat"
import Contacts from "./contacts/contacts"
import Links from "./links/links"


const Footer = () =>{
    return(
        <footer>
            <Contacts />       
            <Links /> 
            <Chat />    
        </footer>
    )
}


export default Footer