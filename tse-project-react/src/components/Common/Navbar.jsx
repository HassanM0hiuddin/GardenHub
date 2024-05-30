import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        { name: 'Home', href: '/', current: true },
        { name: 'Login', href: '/login', current: false },
        { name: 'Signup', href: '/signup', current: false },
    ];

    return (
        <div className='bg-gradient-to-r from-green-500 to-green-400 fixed w-full'>
            <nav className='container mx-auto flex justify-between items-center py-4 px-8 md:px-20'>
                <div className='text-white font-bold text-2xl'>
                    GardenHub
                </div>
                <ul className='flex space-x-4'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.href} className='text-white px-3 py-2 rounded-md hover:bg-green-600'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
