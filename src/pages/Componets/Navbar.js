import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import {NavData} from './Data/NavData'
import {FaTimes,FaBars}  from "react-icons/fa";
import styled from 'styled-components';


const NavIcon = styled.div`
    display: flex;
    margin-left: auto;
    padding-right: 50px;

@media (max-width: 575px) {
    padding-right: 15px;
}
@media (min-width: 568px) and (max-width: 767px) {
    padding-right: 10px;
}

`

function Navbar() {

const [sidebar, setSidebar] = useState(false) 
const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <div className="navbar">
            <NavIcon>
                <Link to="#" className="menu-bars ">
                    <FaBars onClick={showSidebar}/>
                </Link>
            </NavIcon>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                    <Link to="#" className="menu-bars menu-bars-hide">
                        <FaTimes onClick={showSidebar}/>
                    </Link>
             
                {NavData.map((item, i) =>{
                    return(
                        <li key={i} className={item.cName}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar