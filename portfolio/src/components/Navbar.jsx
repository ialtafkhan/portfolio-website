import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder";
const Navbar = () => {
    const [expandNavbar, setexpandNavbar] = useState(false)

    const location = useLocation();
    useEffect(() => {
        setexpandNavbar(false)
    }, [location])
    return (
        <>

            <div className="navbar" id={expandNavbar ? "open" : "close"} >
                <div className='toggleButton' >
                    <button onClick={(e) => setexpandNavbar((pre) => !pre)} >
                        <ReorderIcon />
                    </button>
                </div>
                <div className="links">
                    <Link className='link' to={'/'} >Home</Link>
                    <Link className='link' to={'/projects'} >projects</Link>
                    <Link className='link' to={'/Experience '} >Experience </Link>
                </div>
            </div>

        </>
    )
}

export default Navbar