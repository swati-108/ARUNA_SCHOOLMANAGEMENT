import React from "react"
import logo from "./logo.png"



function card() {

    return (
         <div className = "card" id="signup">
            <img src={logo} alt="logo" className="logo" width='250' heigth='250'></img>
            <div className = "heading">
                <p>Welcome</p>
            </div>
            <div className = "details">
               To keep connected with us please login with personal Info
            </div>
            <div className = "input">
                <p id="email" className = "details" > Email</p>
                <input className = "textbox" type='text' placeholder="abcd@gmail.com" >
                    
                </input>
                
                <p id="password" className = "details" > Create Password</p>
                <input className = "textbox" type='password' pattern=".{8}">
                    
                </input>
                
                <p className = "details" id="confirmpsw">Confirm Password</p>
                <input className = "textbox" type='password' pattern=".{8}"> 
                    
                 </input>
            
                <button>Login</button>
            </div>

        </div> 

    );
}




export default card;