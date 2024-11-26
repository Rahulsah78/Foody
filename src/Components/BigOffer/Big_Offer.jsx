import React from 'react'

const Big_Offer = () => {
    const offer = [
        {
            img: "/img/image_bigOffer_1.png"
        },
        {
            img: "/img/image_bigOffer_2.png"
        },
        {
            img: "/img/image_bigOffer_3.png"
        },
    ]
    return (
        <>
            <div className='md:px-16 px-8 bg-[#FFF8EE] font-poppins'>
                <h1 className='text-center text-3xl text-[#CC3333] font-bold'>Big Offer</h1>
                <p className='font-bold text-center text-[#2A435D]'>For in this week, take your food, buy your best one.</p>
                <div className='flex flex-col md:flex-row items-center gap-[21px] mt-5'>
                    {
                        offer.map((item, index) => (
                            <div
                                key={index}
                                className='h-[200px] w-full md:w-[560px] bg-red-500' // w-full for mobile, w-[560px] for desktop
                            >
                                <img className='h-full w-full object-cover' src={item.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Big_Offer
