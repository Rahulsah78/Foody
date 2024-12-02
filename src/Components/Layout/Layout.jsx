import { useEffect, useState } from 'react'
import { FaCartArrowDown, FaClock, FaFileContract, FaHeart } from 'react-icons/fa6'
import { IoMdHeart } from 'react-icons/io'
import { IoCallSharp } from 'react-icons/io5'
import { FaUser, FaCog, FaSignOutAlt, FaQuestionCircle, FaShieldAlt, } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import Loader from '../../Loader/Loader'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../Animation/AllAnimation'
import { BiLogOut } from 'react-icons/bi'


const Layout = ({ children }) => {
    const location = useLocation()
    const [dropuser, setDropUser] = useState(false);
    // mobile toggle here
    const [mobile, setMobile] = useState(false)
    // menu link item here
    const menu = [
        {
            label: 'HOME',
            link: '/'
        },
        {
            label: 'ABOUT',
            link: '/about'
        },
        {
            label: 'FOOD',
            link: '/foods'
        },
        {
            label: 'CONTACT',
            link: '/contact'
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isVisible, setIsVisible] = useState(false);

    // Monitor scroll position
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);  // Show icon when scrolled down 50px
        } else {
            setIsVisible(false);  // Hide icon when near top
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Smooth scroll animation
        });
    };

    // Listen for scroll events
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);  // Cleanup on unmount
    }, []);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    // disbabled scroll
    useEffect(() => {
        if (isLoading) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
    }, [isLoading]);

    // Get data from localStorage
    const users = JSON.parse(localStorage.getItem("UserLoginInfo"));

    //   Cart.length logic here
    const allCartItem = useSelector((state) => state.CartSlice.carts);
    // console.log(allCartItem)
    // logout
    const handlelogout = () => {
        // Remove user data from localStorage
        localStorage.removeItem('UserLoginInfo'); // Clear the user data from localStorage
    }
    return (
        <>
            <div>
                {isLoading && (
                    <div className="absolute flex items-center justify-center top-0 left-0 h-[100vh]  z-[99999] w-full bg-[#FFF8EE]">
                        <Loader />
                    </div>
                )}
                <nav className='w-full sticky top-0 left-0 z-[999]'>
                    {/* top navbar */}
                    <div className=' flex items-center justify-between bg-[#CC3333] w-full h-10 p-8 md:px-16'>
                        <div className='md:flex flex items-center gap-14'>
                            <div className='md:flex flex items-center   md:items-center gap-2'>
                                <FaClock className='text-white md:text-xs text-xs' />
                                <h4 className='text-white md:text-xs text-xs font-poppins'>7:30AM - 9:30PM</h4>
                            </div>
                            <div className='hidden md:flex flex-row items-center justify-center gap-2'>
                                <IoCallSharp className='text-white' />
                                <h4 className='text-white text-xs font-poppins'>9874563210</h4>
                            </div>
                        </div>
                        <div>
                            <Link to={'/register'}>
                                <button className='text-white md:text-xs text-xs font-poppins'>REGISTER</button>
                            </Link>
                        </div>
                    </div>

                    {/* second navbar */}
                    <div className='h-[50px] md:px-16 p-9 flex items-center justify-between shadow-lg bg-[#FFF8EE]'>
                        <div>
                            <Link to={'/'}><h1 className='text-3xl font-bold font-poppins'>FOODY</h1></Link>
                        </div>
                        {/* Menu items: Hidden on mobile, visible on medium+ screens */}
                        <div className='hidden md:flex'>
                            <ul className='flex text-[#2A435D]  font-bold gap-7'>
                                {menu.map((item, index) => (
                                    <div key={index}>
                                        <Link className={`hover:text-red-500 font-poppins ${location.pathname === item.link ? 'text-[#CC3333]' : ''}`} to={item.link}>{item.label}</Link>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        {/* Cart and Hamburger Menu: Always visible, justified between on mobile */}
                        <div className='flex items-center gap-4 md:gap-7'>
                            <div className='flex items-center justify-center relative rounded-full'>
                                <Link to={'/cart'}><FaCartArrowDown className='text-3xl text-[#2A435D]' /></Link>
                                <span className='absolute -top-7 right-0 text-red-500 text-[25px]'>{allCartItem.length}</span>
                            </div>

                            {
                                users ? <div
                                    onClick={() => setDropUser(!dropuser)}
                                    className="h-11 w-11 overflow-hidden cursor-pointer bg-red-500 rounded-full md:block hidden" // Hidden on mobile, shown on desktop
                                >
                                    <img src="/img/user.enc" alt="user" />
                                    {
                                        dropuser && (
                                            <div className="animate__animated animate__fadeIn h-64 w-44 bg-red-500 absolute top-40 right-0 rounded-lg shadow-lg p-4">
                                                <ul className="flex flex-col gap-3 text-white">
                                                    <li className="flex items-center gap-2 hover:ml-5 transition-all duration-300">
                                                        <FaUser /> {/* Icon for Profile */}
                                                        <Link to="/profile">Profile</Link>
                                                    </li>
                                                    <li className="flex items-center gap-2 hover:ml-5 transition-all duration-300">
                                                        <FaHeart /> {/* Icon for Wishlist */}
                                                        <Link to="/wishlist">Wishlist</Link>
                                                    </li>
                                                    <li className="flex items-center gap-2 hover:ml-5 transition-all duration-300">
                                                        <FaFileContract /> {/* Icon for Policy */}
                                                        <Link to="/policy" >Policy</Link>
                                                    </li>
                                                    <li className="flex items-center gap-2 hover:ml-5 transition-all duration-300">
                                                        <FaQuestionCircle /> {/* Icon for Help */}
                                                        <Link to="/help" className="">Help</Link>
                                                    </li>
                                                    <li className="flex items-center gap-2 hover:ml-5 transition-all duration-300">
                                                        <FaCog /> {/* Icon for Settings */}
                                                        <Link to="/setting" >Setting Page</Link>
                                                    </li>
                                                    <li className="flex items-center gap-2 hover:ml-5 transition-all duration-300">
                                                        <button onClick={handlelogout} className='flex items-center gap-2'>
                                                            <BiLogOut /> {/* Icon for Settings */}
                                                            <Link  >Log Out </Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                                    :
                                    <div className="hidden lg:block">
                                        <Link to={'/login'}>
                                            <button className="px-5 py-2 bg-[#cc3333] text-white rounded font-semibold">
                                                Login
                                            </button>
                                        </Link>
                                    </div>

                            }

                            {/* Hamburger Menu: Visible on mobile */}
                            <div className=' md:hidden'>
                                <button onClick={() => setMobile(!mobile)}>
                                    <RiMenu3Line className='text-4xl text-black' />
                                </button>
                                {
                                    mobile && <div className='h-screen w-full absolute top-0 left-0 bg-[#FFF8EE]'>
                                        <div className='flex items-center justify-between px-8 h-24 w-full '>
                                            <p></p>
                                            <button onClick={() => setMobile(!mobile)} className='h-16 w-16 flex items-center justify-center text-3xl'><ImCross /></button>
                                        </div>
                                        <div className='px-8'>
                                            {menu.map((item, index) => (
                                                <motion.ul
                                                    variants={SlideLeft(0.4 + index * 0.2)}
                                                    initial="initial"
                                                    whileInView="animate"
                                                    key={index} className='flex text-[#2A435D] text-2xl font-semibold gap-7'>
                                                    <div key={index}>
                                                        <Link className={`${location.pathname === item.link ? 'text-[#CC3333]' : ''}`} to={item.link}>{item.label}</Link>
                                                    </div>
                                                </motion.ul>
                                            ))}

                                            {
                                                users ? <motion.div
                                                    variants={SlideLeft(1.3)}
                                                    initial="initial"
                                                    whileInView="animate"
                                                >
                                                    <button onClick={handlelogout} className='h-10 w-28 mt-2 text-white font-bold bg-orange-500'><Link>Log Out</Link></button>
                                                </motion.div>
                                                    :
                                                    <motion.div
                                                        variants={SlideLeft(1.3)}
                                                        initial="initial"
                                                        whileInView="animate"
                                                    >
                                                        <button className='h-10 w-28 mt-2 text-white font-bold bg-orange-500'><Link to={'/login'}>LOGIN</Link></button>
                                                    </motion.div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
                <div>{children}</div>
                <footer className="font-poppins md:px-16 px-3.5 md:mt-0 mt-5 bg-[#CC3333] text-white py-10">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Location Section */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Our Locations</h3>
                            <ul className="space-y-2">
                                <li>Place 1: 123 Food Street, Market A</li>
                                <li>Place 2: 456 Delicious Ave, Market B</li>
                                <li>Place 3: 789 Tasty Road, Market C</li>
                            </ul>
                        </div>

                        {/* About Section */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">About Us</h3>
                            <p>
                                Welcome to [FOODY]! We provide delicious and freshly made food to satisfy your cravings. Visit us at our locations to enjoy great meals and a cozy atmosphere.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                            <Link target='blank' to={'https://mail.google.com/mail/u/0/#inbox'}>Email: sahfamily786@.com</Link>
                            <p>Phone: (123) 456-7890</p>
                            <div className="flex space-x-4 mt-4">
                                {/* Social Media Links (Replace with icons if desired) */}
                                <a href="#" className="hover:text-[#FF5733]">Facebook</a>
                                <a href="#" className="hover:text-[#FF5733]">Instagram</a>
                                <a href="#" className="hover:text-[#FF5733]">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10 text-sm border-t border-white pt-4">
                        © 2024 [FOODY]. All rights reserved.
                    </div>
                </footer>
                {/* goto the top */}
                {
                    isVisible && (
                        <div
                            onClick={scrollToTop}
                            className="ml-16 h-10 w-10 bg-red-500 fixed bottom-2 md:right-16 right-8 flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
                        >
                            <MdOutlineKeyboardArrowUp className="text-5xl text-[#FFF8EE]" />
                        </div>
                    )

                }

            </div>
        </>
    )
}

export default Layout
