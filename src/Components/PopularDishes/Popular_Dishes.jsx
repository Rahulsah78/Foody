import React from 'react'

const PopularDishes = () => {
    const dishes = [
        {
            img: '/img/Dishes_1.png'
        },
        {
            img: '/img/Dishes_2.png'
        },
        {
            img: '/img/Dishes_3.png'
        },
        {
            img: '/img/Dishes_4.png'
        },
        {
            img: '/img/Dishes_5.png'
        },
    ]
    return (
        <>
            <div className='md:px-16 px-8 bg-[#FFF8EE]'>
                <h5 className='text-[#2A435D] font-bold text-center font-poppins'>Food Item</h5>
                <h1 className='text-3xl text-[#CC3333] font-bold text-center font-poppins'>Popular Dishes</h1>
                <div className='grid grid-cols-2 gap-3 mt-6 md:flex md:gap-5 md:w-full'>
                    {
                        dishes.map((item, index) => (
                            <div key={index} className='flex flex-wrap md:h-[120px] md:w-[229px] h-[35vw] w-[35vw] rounded-[5px] '>
                                <img className='h-full object-cover' src={item.img} alt="dishes" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default PopularDishes
