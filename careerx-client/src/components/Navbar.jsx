import React, { useState } from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import careerxLogo from '../assets/careerx-logo.svg';

const Navbar = () => {
    
    const navItems = [
        {
            path: '/',
            title: 'Home'
        },
        
        {
            path: '/my-jobs',
            title: 'My Jobs'
        },
        {
            path: '/post-job',
            title: 'Post Job'
        }
    ]
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            
            <nav className='flex justify-between items-center'>
            <a href="/">
            <img src={careerxLogo} width={100} alt="CareerX Logo" />
            </a>

            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path, title}) => (
                            <li key={path} className='text-base text-primary'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                    isActive ? "active" : ""
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        )
                )
            }
            </ul>
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link
                    to='/login'
                    className='py-2 px-5 border rounded-md'
                >
                    Login
                </Link>
                <Link
                    to='/signup'
                    className='py-2 px-5 border rounded-md bg-primary text-white'
                >
                    Signup
                </Link>
            </div>
            <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBars className='w-5 h-5 text-primary' />
                    }
                </button>
            </div>
            </nav>

            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
                {
                    navItems.map(({path, title}) => (
                            <li key={path} className='text-base text-white first:text-white py-1'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                    isActive ? "active" : ""
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        )
                )
            }
            <li className='text-white py-1'><Link
                    to='/login'
                >
                    Login
                </Link>
                </li>
                <li>
                <Link
                    to='/signup'
                >
                    Signup
                </Link>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default Navbar