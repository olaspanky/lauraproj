import React from 'react'
import Image from 'next/image'
import { press, press2, press3, press4, press5 } from '@/public/laura'

const Press = () => {
  return (
    <div className='flex justify-center align items-center p-3 lg:px-[px] lg:py-[px] bg-gray-800 '>
      <div className='text-center'>
            <div className='p-5 '><p>We’ve been mentioned in the press</p></div>   
            <div className='grid grid-cols-5 gap-10 lg:gap-5'>
                <div className='col-span-1'><Image src={press} alt="" className='w-10 lg:w-40 h-3 lg:h-10'/></div>
                <div className='col-span-1'><Image src={press2} alt="" className='w-10 lg:w-40 h-3 lg:h-10'/></div>
                <div className='col-span-1'><Image src={press3} alt="" className='w-10 lg:w-40 h-3 lg:h-10'/></div>
                <div className='col-span-1'><Image src={press4} alt="" className='w-10 lg:w-40 h-3 lg:h-10'/></div>
                <div className='col-span-1'><Image src={press5} alt="" className='w-10 lg:w-40 h-3 lg:h-10'/></div>
            </div>   
      </div>
    </div>
  )
}

export default Press
