import React from 'react';
import './Navbar.css'
import logo from '../../../assets/logo.png'
import cart_icon from '../../../assets/cart_icon.png'

const Navbar = () => {
    return (
        <div className='navbar flex justify-around px-4 py-[10px]'>
            <div className="logo flex justify-center gap-3 items-center">
                <img src={logo} alt="" />
                <p className='font-semibold text-2xl text-[#171717]'>SHOPPER</p>
            </div>
            <ul className="nav-menu flex  items-center  text-lg font-medium gap-12">
                <li><a href='#'>Shop</a><hr/></li>
                <li><a href='#'>Man</a></li>
                <li><a href='#'>Woman</a></li>
                <li><a href='#'>Kids</a></li>
            </ul>
           


            <div className="nav-login-cart flex justify-center items-center   gap-3">
                <button className='text-xl text-[#515151] font-medium  w-[155px] h-[50px] rounded-[75px] border-[1px] border-[#7a7a7a]border-solid active:bg-[#f3f3f3] '>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count -mt-[35px] -ml-[20px] rounded-[11px] flex justify-center items-center w-5  h-5  bg-[#ff0000] text-white ">0</div>
            </div>

        </div>
    );
};

export default Navbar;