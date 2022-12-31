import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css'
import { IoCart } from "react-icons/io5";

const Header = ( { cartItems }) => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to={'/'} className='logo'>FreeMarket</Link>
                </h1>
            </div>

            <div className='header-links'>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Cart'} className='cart'><IoCart></IoCart>
                        <span className='cart-length'>{ cartItems.length >= 1 ? ( cartItems.length ) : ('')} </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
