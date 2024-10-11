import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import logo from '../../assets/navbar/logo.png'
import cross from '../../assets/navbar/cross.jpg'
import menu from '../../assets/navbar/menu.jpg'
import emergencyIcon from '../../assets/navbar/emergencyLogo.png'

export const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/book_delivery",
        title: "Book Delivery",
    },
    {
        id: "/services",
        title: "Services",
    },
    {
        id: "/pricing",
        title: "Pricing",
    },
    {
        id: "/track_delivery",
        title: "Track Delivery",
    },
    {
        id: "/dashboard",
        title: "Dashboard",
    },
];

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={` w-full flex items-center sticky top-0 z-20 bg-white px-10 border-shadow shadow-xl`}
            // style={{backgroundImage: 'linear-gradient( 109.6deg,  rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% )'}}
            style={{backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(242,235,243,1) 0%, rgba(234,241,249,1) 90.1% )'}}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="bg-white">
                    <img src={toggle ? cross : menu} alt="menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} left-0 p-6 black-gradient absolute top-20  min-w-[140px] z-10 rounded-xl bg-white border-2 border-shadow shadow-xl`}>
                        <ul className='list-none flex justify-start items-start flex-1 flex-col gap-5'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={` ${active == nav.title ? "text-blue-600" : "text-black"} hover:text-blue-600 text-[18px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    {/* <a href={`${nav.id}`}>{nav.title}</a> */}
                                    <Link to={nav.id}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="">
                    <Link
                        to="/"
                        className='flex items-center gap-2'
                        onClick={() => {
                            setActive("");
                            window.scroll(0, 0);
                        }}
                    >
                        {/* <img src={logo} alt="logo" className='w-20 h-20 object-contain' /> */}
                        <p className='text-[24px] font-bold cursor-pointer flex font-serif' style={{color: "#4B61D1"}}>
                            QuickDrop
                        </p>
                    </Link>
                </div>

                <div className="navbar-end flex">
                      

                    <div className="">
                        <Link to="/requestType">
                            <img src={emergencyIcon} alt="logo" className='w-16 h-16 object-contain' />
                        </Link>
                    </div>
                </div>

                {/* For Mobile */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? cross : menu} alt="menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={` ${active == nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar