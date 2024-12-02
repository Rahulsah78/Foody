import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
    const menuItems = [
        {
            label: 'Burger',
            imgSrc: '/img/menu1.png',
            isHighlighted: true
        },
        {
            label: 'Fried chicken',
            imgSrc: '/img/menu2.png',

        },
        {
            label: 'Doner with Grilled Chicken',
            imgSrc: '/img/menu3.png',

        },
        {
            label: 'Pizza',
            imgSrc: '/img/menu4.png',

        },
        {
            label: 'Hot Dogs',
            imgSrc: '/img/menu5.png',

        },
        {
            label: 'Chicken Skewers',
            imgSrc: '/img/menu6.png',
        },
        {
            label: 'Greek Salad',
            imgSrc: '/img/menu7.png',

        },
        {
            label: 'Dahi Puri',
            imgSrc: '/img/menu8.png',

        },
        {
            label: 'Ice cream with  Chocolate',
            imgSrc: '/img/menu9.png',

        },
        {
            label: 'Cocktail Glasses',
            imgSrc: '/img/menu10.png',

        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <>
            <div  data-aos="fade-up" className='md:px-16 px-8 bg-[#FFF8EE] font-poppins'>
                <h3 className=' p-5 font-bold text-[#CC3333] text-center'>SPECIALS MANU FOR ALL TIME</h3>
                <div className='flex items-center justify-center gap-5 mx-auto flex-wrap '>
                    {
                        menuItems.map((item, index) => (
                            <Link key={index} to={item.link}>
                                <div key={index} className='gap-2 flex items-center justify-center flex-col w-[180px] h-[180px] rounded-[20px]'>
                                    <img className='' src={item.imgSrc} alt="menuitem" />
                                    <label className='font-bold text-[#CC3333] text-center text-[15px]'>{item.label}</label>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Menu
