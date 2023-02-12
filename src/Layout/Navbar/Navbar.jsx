import React from 'react';
import css from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg';


const Navbar = () => {
    return (
        <div className={css.container} >
           <div className={css.logo}>
            <img src={logo} alt='logo' />
            <span>amazon</span>
            </div> 
            <div className={css.right}>
               <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collection</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
               </div>
               <input type={"text"} placeholder='Search' className={css.search} />
               <CgShoppingBag className={css.cart} />
            </div>
        </div>
    );
};

export default Navbar;