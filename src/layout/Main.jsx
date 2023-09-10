import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import AutoText from '../Components/AutoText/AutoText';

const Main = () => {
    return (
        <div>
            <AutoText/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;