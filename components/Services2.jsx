import React from 'react'
import Image from 'next/image'
import { bman, cgirl, check, icon1, icon2, icon3, woman1 } from '@/public/laura'

const Services2 = () => {
  return (
    <div className='bg-white text-black px-8 py-10'>
        <div>
            <div>
                <div className='text-center px-5 md:px-20 '>
                    <h1 className='font-extrabold text-[22px] p-2 md:p-5'>We offer a comprehensive list of services</h1>
                    <p className='lg:px-80 font-[7px]'>Our team of experts can help you with everything from crafting effective marketing campaigns and developing engaging content, to designing eye-catching graphics and developing innovative tech solutions.</p>
                </div>

                <div className='grid grid-cols-1  md:grid-cols-12 gap-10 p-3 mt-3'>
                <div className='col-span-7'>
                <div><Image src={icon1}/></div>

                <h1 className='p-2'>Marketing</h1>
                <p className=' w-[90%] font-[7px] p-2 text-gray-400'>At Space3kit, we know that effective marketing is essential to building a successful business in the finance and crypto verticals. That's why we offer a full range of marketing services designed to help you reach your target audience, build brand awareness, and drive conversions.</p>

                <div className='p-2 lg:pl-10 text-gray-400'>
                <ul className='list-disk md:pl-10'>
                <li className='pt-4 flex gap-3'> <Image src={check}/> Develop comprehensive marketing strategies</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Managing your social media accounts</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Crafting engaging email marketing campaigns</li>
                </ul>
                </div>
                </div>
                <div className='col-span-5'>
                <Image src={woman1} alt=""/>
                </div>
                </div>



                
                <div className='grid md:grid-cols-12 grid-cols-1 gap-10 p-3 mt-3 '>
                <div className='col-span-5'>
                <Image src={bman} alt=""/>
                </div>
                <div className='col-span-7 order-first lg:order-last'>
                <div><Image src={icon2}/></div>

                <h1 className='p-2'>Marketing</h1>
                <p className=' w-[90%] font-[7px] p-2 text-gray-400'>At Space3kit, we know that effective marketing is essential to building a successful business in the finance and crypto verticals. That's why we offer a full range of marketing services designed to help you reach your target audience, build brand awareness, and drive conversions.</p>

                <div className='p-2 lg:pl-10 text-gray-400'>
                <ul className='list-disk md:pl-10'>
                <li className='pt-4 flex gap-3'> <Image src={check}/> Develop comprehensive marketing strategies</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/> Managing your social media accounts</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/> Crafting engaging email marketing campaigns</li>
                </ul>
                </div>
                </div>
              
                </div>



                
                <div className='grid grid-cols-1 md:grid-cols-12 gap-10 p-3 mt-3 '>
                <div className='col-span-7'>
                <div><Image src={icon3}/></div>

                <h1 className='p-2'>Marketing</h1>
                <p className=' w-[90%] font-[7px] p-2 text-gray-400'>At Space3kit, we know that effective marketing is essential to building a successful business in the finance and crypto verticals. That's why we offer a full range of marketing services designed to help you reach your target audience, build brand awareness, and drive conversions.</p>

                <div className='p-2 lg:pl-10 text-gray-400'>
                <ul className='list-disk md:pl-10'>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Develop comprehensive marketing strategies</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Managing your social media accounts</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Crafting engaging email marketing campaigns</li>
                </ul>
                </div>
                </div>
                <div className='col-span-5'>
                <Image src={cgirl} alt=""/>
                </div>
                </div>



                
            </div>
        </div>
    </div>
  )
}

export default Services2
