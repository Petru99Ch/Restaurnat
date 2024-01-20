import "./Chat.css"
import { useState } from "react"






const Chat = ()=>{
    let [open, setOpen] = useState(false)
    const toggleChat = () =>{        
        setOpen(!open)
    }
    return(
        <div className="chat">
            <button onClick={toggleChat}><i className="fa-brands fa-rocketchat"></i></button>
            <ul className={open ? "show" : ""}>
                <li><a><i className="fa-brands fa-facebook"></i></a></li>
                <li><a><i className="fa-brands fa-viber"></i></a></li>
                <li><a><i className="fa-brands fa-telegram"></i></a></li>
            </ul>

        </div>
    )
}

export default Chat