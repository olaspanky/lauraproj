import React from 'react'
import Image from 'next/image'
import { image, avatar } from '@/public/laura'

const Writings = () => {
  return (
    <div className='bg-[#F9F5FF] py-20 text-black'>
      <div>
      <div>
            <div className='px-10 lg:px-20 text-black text-center'>
                <h1 className='font-bold text-[40px]'>Latest writings</h1>
                <p className='text-[20px]'>The latest news, technologies, and resources from our team.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 px-3 lg:px-40'>


            <div className='col-span-1 grid grid-cols-2'>
            <div className='col-span-1'><Image src={image}/> </div>
            <div className='col-span-1 pl-3'>
            <h1 className='text-blue-400'>Design</h1>
            <p className='mt-2 font-bold text-[12px]'>UX preview Presentation</p>
            <p className='mt-3 font-semibold text-[9px]'>How do you create compelling presentations that wow your...</p>
            
            <div className='grid grid-cols-2 mt-5'>
            <div className='col-span-1 grid grid-cols-12 py-3'>
            <div className='col-span-4'><Image src={avatar}/></div>
            <div className='col-span-8 text-[7px] align-center p-2'>
            <h1>Olivia Rhye</h1>
            <p>20 Jan 2022</p>
            </div>
            </div>
            </div>
            </div>
            </div>



            <div className='col-span-1 grid grid-cols-2'>
            <div className='col-span-1'><Image src={image}/> </div>
            <div className='col-span-1 pl-3'>
            <h1 className='text-blue-400'>Design</h1>
            <p className='mt-2 font-bold text-[12px]'>UX preview Presentation</p>
            <p className='mt-3 font-semibold text-[9px]'>How do you create compelling presentations that wow your...</p>
            
            <div className='grid grid-cols-2 mt-5'>
            <div className='col-span-1 grid grid-cols-12 py-3'>
            <div className='col-span-4'><Image src={avatar}/></div>
            <div className='col-span-8 text-[7px] align-center p-2'>
            <h1>Olivia Rhye</h1>
            <p>20 Jan 2022</p>
            </div>
            </div>
            </div>
            </div>
            </div>




            </div>

            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 px-3 lg:px-40'>


            <div className='col-span-1 grid grid-cols-2'>
            <div className='col-span-1'><Image src={image}/> </div>
            <div className='col-span-1 pl-3'>
            <h1 className='text-blue-400'>Design</h1>
            <p className='mt-2 font-bold text-[12px]'>UX preview Presentation</p>
            <p className='mt-3 font-semibold text-[9px]'>How do you create compelling presentations that wow your...</p>
            
            <div className='grid grid-cols-2 mt-5'>
            <div className='col-span-1 grid grid-cols-12 py-3'>
            <div className='col-span-4'><Image src={avatar}/></div>
            <div className='col-span-8 text-[7px] align-center p-2'>
            <h1>Olivia Rhye</h1>
            <p>20 Jan 2022</p>
            </div>
            </div>
            </div>
            </div>
            </div>



            <div className='col-span-1 grid grid-cols-2'>
            <div className='col-span-1'><Image src={image}/> </div>
            <div className='col-span-1 pl-3'>
            <h1 className='text-blue-400'>Design</h1>
            <p className='mt-2 font-bold text-[12px]'>UX preview Presentation</p>
            <p className='mt-3 font-semibold text-[9px]'>How do you create compelling presentations that wow your...</p>
            
            <div className='grid grid-cols-2 mt-5'>
            <div className='col-span-1 grid grid-cols-12 py-3'>
            <div className='col-span-4'><Image src={avatar}/></div>
            <div className='col-span-8 text-[7px] align-center p-2'>
            <h1>Olivia Rhye</h1>
            <p>20 Jan 2022</p>
            </div>
            </div>
            </div>
            </div>
            </div>




            </div>
      </div>
      </div>
    </div>
  )
}

export default Writings
