import React from 'react';
import nav from '../../assets/nav.jpg'
import { Link } from 'react-router-dom';
import { GiSelfLove } from 'react-icons/gi';
import { SlUser} from 'react-icons/sl';
import { SlBasket } from 'react-icons/sl';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='header'>
            <Link to='/'>
                <img width={'140px'} src={nav} ></img>
            </Link>

            <div className='navInputSearch'>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <div className='navLists'>
                <div className='needHelp'>
                    <span>Need Help?</span>
                    <span> 9602-321020</span>
                </div>
                <div>
                    <Link className='navList' to='/wishList'>
                        <span>
                            <GiSelfLove />
                        </span>
                        <span>Wish Lists</span>
                    </Link>
                </div>
                <div>
                    <Link className='navList' to='/signIn'>
                        <span><SlUser/></span>
                        <span>Sign In</span>
                    </Link>
                </div>
                <div>
                    <Link className='navList' to='/cart'>
                    <span><SlBasket/></span>
                    <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;