import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import PopularDishes from '../PopularDishes/Popular_Dishes';
import RICH_HEALTHY from '../RICHHEALTHY/RICH_HEALTHY';
import Big_Offer from '../BigOffer/Big_Offer';
import Menu from '../Menu/Menu';
import WhyWeAreTheBest from '../WhyWeAreTheBest/Why_We_Are_The_Best';

const slides = [
    {
        id: 1,
        img: "/img/chicken-.png",
        title: " Tasty Bites: Explore Delicious Recipes",
        para: "Whether you're a beginner or an experienced chef, our easy-to-follow recipes will guide you through every step of cooking your favorite meals."
    },
    {
        id: 2,
        img: "/img/burger.png",
        title: 'Flavors of the World takes you on a culinary adventure like no other.',
        para: "Flavors of the World takes you on a culinary adventure like no other. Explore authentic dishes from every corner of the globe, and bring international flavors to your kitchen. "
    },
    {
        id: 3,
        img: "/img/pizza.png",
        title: 'Foodie Haven: Discover, Cook, and Enjoy',
        para: "Foodie Haven is the app designed for people who live to eat! Discover new recipes, perfect your cooking skills, and enjoy meals that will satisfy your cravings."
    },
];


const HeroPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Layout>
                <div className="bg-[#FFF8EE] font-poppins relative flex flex-col md:flex-row w-full h-[75.4vh] text-black overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute w-full h-full flex flex-col md:flex-row items-center md:justify-start transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {/* Left Side (Text Content) */}
                            <div className="w-full md:w-1/2 p-8 md:p-16 text-black flex flex-col items-center md:items-start justify-center text-center md:text-left">
                                <h2
                                 className="text-3xl font-semibold">{slide.title}</h2> {/* Dynamic Title */}
                                <p className="mt-4 text-justify">{slide.para}</p>
                                <button className="mt-6 w-fit py-3 px-4 bg-[#CC3333] text-white font-semibold rounded-lg">
                                    Learn More
                                </button>
                            </div>

                            {/* Right Side (Image) */}
                            <div className="flex items-center justify-center w-full md:w-1/2 h-full">
                                <img className="md:w-full md:h-full h-[35vw] w-[35vw]  object-cover" src={slide.img} alt={`Slide ${slide.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <PopularDishes />
                <RICH_HEALTHY />
                <Big_Offer />
                <Menu />
                <WhyWeAreTheBest />
            </Layout>
        </>
    );
};

export default HeroPage;
