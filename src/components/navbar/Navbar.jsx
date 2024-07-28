import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

const [active, setActive] = useState(false);
const [open, setOpen] = useState(false);

const {pathname} = useLocation()

const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
}

useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
        window.removeEventListener("scroll", isActive)
    };
}, []);

    const currentUser= {
        id:1,
        username:"Debdutta Rudra",
        isSeller:true
    }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className="link">
                    
                    <span className="text">LeafMart</span>
                </Link>
               <span className="dot">.</span> 
            </div>
            <div className="links">
                <span>LeafMart Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>JOIN</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="data:image/png;base64,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"></img>
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                    <Link className="link" to="/mygigs">Gigs</Link>
                                    <Link className="link" to="/add">Add new Gig</Link>
                                    </>
                                )}
                                    <Link className="link" to="/orders">Orders</Link>
                                    <Link className="link" to="/messages">Messages</Link>
                                    <Link className="link" to="/">Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
            <hr />
            

        </div>
    </div>
  )
}

export default Navbar
