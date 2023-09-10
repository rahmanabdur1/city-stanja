import React, { useState } from 'react';
import './BgBanner.css';
import bg from '../../assets/bg.jpg';
import { Link } from 'react-router-dom';

const BgBanner = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='bgBanner'>
           <Link to=''>  <img src={bg} alt="Background" /></Link>
            <div className='links'>
                <Link to="/">HOME</Link>
                <Link to="/new-arrival">NEW ARRIVAL</Link>
                <Link to="/all-collection">ALL COLLECTION</Link>
                    <Link to="#" className="category-link"><span>CATEGORY</span>
                        <div className="dropdown-content">
                            <Link to="/anarkali-suit-set">Anarkali Suit Set</Link>
                            <Link to="/a-line-suit-set">A Line Suit Set</Link>
                            <Link to="/dresses">Dresses</Link>
                            <Link to="/kurta-suit-set">Kurta Suit Set</Link>
                            <Link to="/gown-dress">Gown-Dress</Link>
                            <Link to="/tops-tonic">Tops Tonic</Link>
                        </div>
                     </Link>
                <Link to="/contact-us">CONTACT US</Link>
            </div>
        </div>
    );
};

export default BgBanner;
