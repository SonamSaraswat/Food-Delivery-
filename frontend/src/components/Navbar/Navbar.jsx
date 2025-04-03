import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='' className='logo'></img></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu('Home')} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('Contact us')} className={menu==="Contact us"?"active":""}>Contact us</a>
        </ul>
        <div>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""></img>
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt=""></img></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar