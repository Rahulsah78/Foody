import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const RICH_HEALTHY = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <div className='md:px-16 px-8 py-10 bg-[#FFF8EE]'>
            <h3 className='text-[#2A435D] text-center text-xl font-bold font-poppins'>RICH & HEALTHY</h3>
            <div className='md:flex gap-8 relative md:mt-8 mt-10'>
                {/* Chef's Image (Mobile first) */}
                <div className='md:w-[361px] md:items-center items-center md:h-auto w-full'>
                    <img 
                        data-aos="fade-right"
                        src='/img/richHealthy_1.png'
                        alt='Chef cooking'
                        className='rounded-lg shadow-lg'
                    />
                </div>

                {/* Content Section */}
                <div className='flex flex-col md:flex-row font-poppins'>
                    <div className='mt-3 md:mt-0'>
                        <div className='md:pt-0 pt-5 '>
                            <h2 className='text-[#CC3333] font-bold md:text-2xl text-[5vw]'>
                                Highest quality artisanal grains, <br /> proteins & seasonal ingredients
                            </h2>
                            <p className='text-[#2A435D] md:text-2 text-[15px] mt-4'>
                                Righteous indignation and dislike men who are so beguiled and <br /> demoralized by the charms of pleasure of the moment, so blinded by <br /> desires, that they cannot foresee.
                            </p>
                        </div>
                        <ul className='list-none  mt-4 space-y-2'>
                            <li className='flex items-center'>
                                <span className='text-red-500 mr-2 md:text-[30px]'>★</span>
                                <h3 className='text-[#2A435D]'>Simple and easy to distinguish</h3>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-red-500 mr-2 md:text-[30px]'>★</span>
                                <h3 className='text-[#2A435D]'>Pleasure of the moment blinded desire</h3>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-red-500 mr-2 md:text-[30px]'>★</span>
                                <h3 className='text-[#2A435D]'>What we like best Able to do</h3>
                            </li>
                        </ul>
                        <button className='md:mt-4 mb-5 mt-5 bg-[#CC3333] text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-all'>
                            Read More
                        </button>
                    </div>

                    {/* Right Image (Second Image) */}
                    <div data-aos="fade-left" className='md:w-[250px] md:absolute left-[60vw] top-[12vw] rounded-[10px] '>
                        <img 
                            src='/img/richHealthy_2.png'
                            alt='Salad dish'
                            className='w-full rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RICH_HEALTHY;
