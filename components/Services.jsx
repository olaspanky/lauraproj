import { icon1, lman } from '@/public/laura'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='bg-[#32D583] p-8'>
            <div>
                    <div className='text-center'>
                    <h1 className='text-[18px] pt-5'>We specialize in providing expert services</h1>
                    <p className='text-[10px] pt-2'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    
                    </div>

                    <div className='flex justify-center pt-10'>
                    <Image src={lman} alt=""/>
                    </div>

                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 px-10 pt-10'>
                    <div className='col-span-1 flex justify-center align-center '>
                    <div>
                    <div className='flex justify-center align-center rounded-full '><Image src={icon1}/></div>
                    <div className='text-center px-5 pt-5 lg:px-20'>
                    <h1 className='text-md'>High Value Users</h1>
                    <p className='text-sm'>Dedicated to helping industry-leading companies acquire high-value users at profitable prices</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-span-1 flex justify-center align-center '>
                    <div>
                    <div className='flex justify-center align-center rounded-full '><Image src={icon1}/></div>
                    <div className='text-center px-5 pt-5 lg:px-20'>
                    <h1 className='text-md'>Real-time Market Analytics</h1>
                    <p className='text-sm'>An all-in-one platform that uses real-time market performance analytics to build tailored marketing strategies.</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-span-1 flex justify-center align-center '>
                    <div>
                    <div className='flex justify-center align-center rounded-full '><Image src={icon1}/></div>
                    <div className='text-center px-5 pt-5 lg:px-20'>
                    <h1 className='text-md'>Succeed with us</h1>
                    <p className='text-sm'>Whether you're a crypto exchange, NFT project, or other crypto- or NFT-based project, we have the expertise you need to succeed.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                        <div className='flex justify-center align-center pt-20 pb-20'>                    <button className='px-12 py-2 border border-3 border-[#6A00FB]'>Contact us now</button>
                        </div>
            </div>
    </div>
  )
}

export default Services
