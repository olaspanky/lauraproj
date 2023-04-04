import { check, icon2 } from '@/public/laura'
import React from 'react'
import Image from 'next/image'


const Pricing = () => {
  return (
    <div>
        <div className='lg:px-40 p-10 bg-white'>
            <div>
                <p className='text-[15px] text-blue-600'>Pricing</p>
                <h1 className='text-[30px] text-black'>Simple, transparent pricing</h1>
                <p className="text-[15px] text-gray-600">We believe Untitled should be accessible to all companies, no matter the size.</p>


                <div className='grid lg:grid-cols-3 py-20 gap-5 '>
                <div className='col-span-1 p-5 bg-white text-black shadow-lg'>
                <div className='flex justify-center align-center pt-5'><Image src={icon2}/></div>
                <div className='text-center pt-5'><p>Basic Plans</p></div>
                <div className='text-center pt-5'><h1>$10/Month</h1>
                <p>Billed Annually</p>
                </div>
                <div className='flex justify-center align-center '>
                <ul className='list-disk'>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Access to all basic features</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Basic reporting and analytics</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Up to 10 individual users</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>20GB individual data each user</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Basic chat and email support</li>
                </ul>
                </div>
                <div className='flex justify-center align-center p-10'><button className='px-14 py-1 bg-green-400 p-10 rounded-sm'>Get Started</button></div>
                </div>



                
                <div className='col-span-1 p-5 bg-white text-black shadow-lg'>
                <div className='flex justify-center align-center pt-5'><Image src={icon2}/></div>
                <div className='text-center pt-5'><p>Basic Plans</p></div>
                <div className='text-center pt-5'><h1>$10/Month</h1>
                <p>Billed Annually</p>
                </div>
                <div className='flex justify-center align-center '>
                <ul className='list-disk'>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Access to all basic features</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Basic reporting and analytics</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Up to 10 individual users</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>20GB individual data each user</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Basic chat and email support</li>
                </ul>
                </div>
                <div className='flex justify-center align-center p-10'><button className='px-14 py-1 bg-green-400 p-10 rounded-sm'>Get Started</button></div>

                </div>



                <div className='col-span-1 p-5 bg-white text-black shadow-lg'>
                <div className='flex justify-center align-center pt-5'><Image src={icon2}/></div>
                <div className='text-center pt-5'><p>Basic Plans</p></div>
                <div className='text-center pt-5'><h1>$10/Month</h1>
                <p>Billed Annually</p>
                </div>
                <div className='flex justify-center align-center '>
                <ul className='list-disk'>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Access to all basic features</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Basic reporting and analytics</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Up to 10 individual users</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>20GB individual data each user</li>
                <li className='pt-4 flex gap-3'> <Image src={check}/>Basic chat and email support</li>
                </ul>
                </div>
                <div className='flex justify-center align-center p-10'><button className='px-14 py-1 bg-green-400 p-10 rounded-sm'>Get Started</button></div>

                </div>




                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
