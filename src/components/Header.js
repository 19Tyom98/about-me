import React from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    const menu = ['Home', 'About', 'Portfolio', 'Contact'];
    const logo = {
        picture: 'https://cdn-icons-png.flaticon.com/512/5338/5338322.png',
        name: 'A.Ghukasyan'
    };

    return (
        <header className="header">
            <div className="logo">
                <div className="fav">
                    <img src={logo.picture} alt="Website Logo" />
                    <h2>{logo.name}</h2>
                </div>
            </div>
            <nav className="navbar">
                <ul>
                    {menu.map((item) => {
                        return <NavLink to={item == 'Home' ? '/' : `/${item}`} >{item} </NavLink>  
                 
                    })}
                </ul>
            </nav>
        </header>
    );
}
