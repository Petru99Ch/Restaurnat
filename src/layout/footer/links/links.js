import "./links.css"
import restaurant from "./links-rest.jpg"

import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import youtube from "./youtube.svg"
import send from "./send.svg"



const Links = () =>{
    return(
        <div>
            <div className="links">
            <div className="links-left">
                <a href="#">
                    <img id="rest" src={restaurant}/>
                </a>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusantium consectetur architecto nesciunt in rerum amet illo quidem placeat libero? In eum nulla quod perferendis. 
                </p>

                <h4>Follow us</h4>

                <div className="social">
                    <a href="#"><img src={facebook}/></a>
                    <a href="#"><img src={instagram}/></a>
                    <a href="#"><img src={youtube}/></a>
                </div>
            </div>
            <div className="links-center">
                <h4>Useful Links</h4>
                <div className="list">
                    <ul className="list-1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Contacs Us</a></li>
                    </ul>

                    <ul className="list-2">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Expert Team</a></li>
                        <li><a href="#">Latest News</a></li>
                    </ul>
                </div>
                

            </div>
            <div className="links-right">
                <div>
                    <h4>Subscribe</h4>
                </div>
                
               
                <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the form below. 
                </p>
                
                <form>
                    <input type="text" placeholder="Email Addres"/>
                    <button><a><img src={send}/></a></button>
                </form>
                <div></div>
                <div></div>
            </div>
            </div>           
            <div className="links-footer">
                <p>Copyright © 2024, All Right Reserved <a href="#">Anup</a></p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy </a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>            
            </div> 
        </div>
        
    )
}

export default Links