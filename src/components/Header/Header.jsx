import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links = [
        { path: '/', label: 'Home' },
        { path: '/listed', label: 'Listed Books' },
        { path: '/pages', label: 'Pages to Read' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact Us' },
    ];

    return (
        <div className="navbar bg-base-100 w-3/4 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? 'text-green-500 font-bold border-2 border-green-500' : 'text-gray-800')}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => (isActive ? 'text-green-500 font-bold border-2 border-green-500' : 'text-gray-800')}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-5 bg-green-500 text-white font-semibold">Sign In</a>
                <a className="btn bg-blue-400 text-white font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;
