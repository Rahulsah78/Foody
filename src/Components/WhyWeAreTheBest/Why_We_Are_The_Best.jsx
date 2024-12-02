import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyWeAreTheBest = () => {

    const Best = [
        {
            img: "/img/cooking 1.png",
            title: "Passionate Chefs",
            para: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
        },
        {
            img: "/img/diet 1.png",
            title: "Passionate Chefs",
            para: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
        },
        {
            img: "/img/candle 1.png",
            title: "Passionate Chefs",
            para: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
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
            <div className='md:px-16 px-8 md:mb-5 mb-10 bg-[#FFF8EE] font-poppins'>
                <h2 className='text-center md:text-2xl text-2xl font-bold text-[#CC3333]'>Why We Are The Best</h2>
                <div data-aos="fade-up" className='md:flex md:flex-row flex-col items-center gap-5 mt-10'> {/* Flex row only applies to md and above */}
                    {
                        Best.map((item, index) => (
                            <div
                                key={index}
                                className={`h-[376px]  w-[90vw]  md:w-[408px] flex flex-col gap-4 items-center justify-center ${index === 1 ? 'bg-red-500 ' : ''}`}
                            >
                                <img src={item.img} alt="cooking" className=" object-cover" />
                                <h2 className={`font-bold text-[#2A435D] ${index === 1 ? 'text-white' : ''}`}>{item.title}</h2>
                                <p className={`text-center text-[#2A435D] ${index === 1 ? 'text-white' : ''}`}>{item.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default WhyWeAreTheBest
