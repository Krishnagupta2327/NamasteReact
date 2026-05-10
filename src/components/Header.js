import {logoUrl} from "../utils/links";
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const Logo =()=>{
    return (

        <div className= "logo-container" >
      
            <img src ={logoUrl} style={
                {
                    height:"80px",
                    widht:"70px"
                    
                }
            }/>
         
        </div>
        
    );
};


const NavList  = () =>{
    const [loginBtn, setLoginBtn] = useState("Login");
    useEffect(()=>{
        console.log("Navlist rendered");
    },[]);
    return (
       <div className= "navlist"> 
       <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About Us</Link></li>
       <li>Offers</li>
       <li>Help</li>
       <li>Profile</li>
       <li><button onClick={()=>{
            console.log("login button is clicked. current state is : " +loginBtn)
            if(loginBtn ==="Login"){
                setLoginBtn("Logout");
            }
            else{
                setLoginBtn("Login");
                alert("You have been logged out");
            }
            

       }
       
       }>{loginBtn}</button></li>
        </ul>
        </div>
    );
};
const Header = ()=> {
    return (
       <div className="header">
            <Logo />
            <NavList />
       </div>
        // <Logo />
        // <NavList />

    );
};
export default Header;