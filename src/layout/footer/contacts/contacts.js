import find from "./contacts-find.svg" 
import call from "./contacts-call.svg" 
import mail from "./contacts-mail.svg" 

import "./contacts.css"
 
 
 const Contacts = () =>{
    return(
        <div className="footer-head">
            <div className="find">
                <a href="#">
                    <img src={find}/>
                </a>
                <div className="">
                    <h4>Find Us</h4>
                    <p>Chișinău, 2004 str. Mihail Sadoveanu 41</p>
                </div>
            </div>
            <div className="call">
                <a href="#">
                    <img src={call}/>
                </a>
                <div className="">
                    <h4>Call us</h4>
                    <p>+123456789</p>
                </div>
            </div>
            <div className="mail">
                <a href="#">
                    <img src={mail}/>
                </a>
                <div className="">
                    <h4>Mail us</h4>
                    <p>mail@info.com</p>
                </div>
            </div>
        </div>
    )
 }

 export default Contacts