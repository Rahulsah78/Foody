import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'


const About = () => {
    
    return (
        <>
            <Layout>
            
                <div>
                    {/* Container div for the fixed image */}
                    <div className='relative md:h-[55vw] h-[150vw]'>
                        <img
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',  // Ensures the image covers the container
                                zIndex: -1, // Ensure it stays behind other content
                            }}
                            src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
                            alt="Fixed Background"
                        />
                    </div>

                    {/* Other content that scrolls */}
                    <div className='min-h-screen bg-[#FFF8EE] overflow-hidden md:mt-64'>
                        {/* First Section */}
                        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mx-auto p-4 md:p-10 w-full max-w-screen-xl'>
                            <div className='h-[60vw] md:h-full w-full md:w-1/2 rounded-[20px] overflow-hidden'>
                                <img className='h-full w-full object-cover' src="/img/girls.jfif" alt="Image" />
                            </div>
                            <div className='h-[60vw] md:h-full w-full md:w-1/2 flex flex-col gap-6 px-4 py-4 md:px-8 md:py-0'>
                                <h4 className='font-bold text-[#2A435D] text-center md:text-left'>
                                    Opaleye yellowtail snapper, velvet catfish, graveldiver banded killifish, Old World rivuline catalufa eagle ray Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.
                                </h4>
                                <p className='font-semibold text-[#2A435D] text-center md:text-left'>
                                    Queen danio velvet catfish Sacramento blackfish, bullhead shark, Colorado squawfish Russian sturgeon clown triggerfish swamp-eel paradise fish. Read more...
                                </p>
                            </div>
                        </div>
                        {/* "Our Story" Section */}
                        <h2 className='md:p-4 pt-5 text-center font-bold text-2xl text-[#CC3333] md:mt-4 mt-12'>
                            OUR STORY
                        </h2>
                        {/* Second Section */}
                        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0  p-4 md:p-10 w-full max-w-screen-xl'>
                            <div className='h-[60vw] md:h-full w-full md:w-1/2 rounded-[20px] overflow-hidden'>
                                <img className='h-full w-full object-cover' src="https://www.shutterstock.com/image-photo/group-friends-meeting-restaurant-posing-260nw-2349014265.jpg" alt="Image" />
                            </div>
                            <div className='data-aos="fade-left" h-[60vw] md:h-full w-full md:w-1/2 flex flex-col gap-6 px-4 py-4 md:px-8 md:py-0'>
                                <h4 className='font-bold text-[#2A435D] text-center md:text-left'>
                                    Opaleye yellowtail snapper, velvet catfish, graveldiver banded killifish, Old World rivuline catalufa eagle ray Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.
                                </h4>
                                <p className='font-semibold text-[#2A435D] text-center md:text-left'>
                                    Queen danio velvet catfish Sacramento blackfish, bullhead shark, Colorado squawfish Russian sturgeon clown triggerfish swamp-eel paradise fish. Read more...
                                </p>
                            </div>
                        </div>



                        {/* Final Section */}
                        <div className='md:mt-2 mt-24  px-4 md:px-16 md:flex items-center justify-center w-full bg-[#FFDFDF]'>
                            <div className='w-full md:w-1/2'>
                                <h2 className='text-[#CC3333] md:pt-1 pt-8 font-semibold text-center md:text-left'>
                                    TASTY AND CRUNCHY
                                </h2>
                                <h2 className='text-2xl text-[#2A435D] font-bold text-center md:text-left'>
                                    Our Chef
                                </h2>
                                <p className='text-sm text-center md:text-left'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <button className='px-8 text-white rounded-[20px] bg-red-500 py-3 mt-4 block mx-auto md:mx-0'>
                                    View Our All Menu
                                </button>
                            </div>
                            <div className='w-full md:w-1/2 mt-4 md:mt-0'>
                                <img className='w-full h-auto' src="/img/image_ourChef.png" alt="Our Chef" />
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About
