import { avatar, image } from '@/public/laura'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
      <div className='bg-[#1B2C24] p-10 lg:px-40 lg:py-40'>

      <div className=' '>
      <h1>Some of Our Previous Projects</h1>
      <p>Manage your team members and their account permissions here.</p>
      </div>

      <div className='border border-t-0px border-b-[2px] border-b-white mt-5'></div>

      <div className='grid lg:grid-cols-3 gap-4 p-8'>


      <div className='col-span-1 p-3 bg-white text-black'>

      <div><Image src={image}/></div>
      <p className='py-5'>Writing</p>
      <h1 className='font-bold text-[20]'>Webbsite Content</h1>
      <p className='text-[8px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

      <div className='grid grid-cols-2'>
      <div className='col-span-1 grid grid-cols-12 py-3'>
      <div className='col-span-4'><Image src={avatar}/></div>
      <div className='col-span-8 text-[7px] align-center p-2'>
      <h1>Olivia Rhye</h1>
      <p>20 Jan 2022</p>
      </div>
      </div>
      </div>
      
      </div>



      <div className='col-span-1 p-3 bg-white text-black'>

      <div><Image src={image}/></div>
      <p className='py-5'>Writing</p>
      <h1 className='font-bold text-[20]'>Website Content</h1>
      <p className='text-[8px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

      <div className='grid grid-cols-2'>
      <div className='col-span-1 grid grid-cols-12 py-3'>
      <div className='col-span-4'><Image src={avatar}/></div>
      <div className='col-span-8 text-[7px] align-center p-2'>
      <h1>Olivia Rhye</h1>
      <p>20 Jan 2022</p>
      </div>
      </div>
      </div>
      
      </div>



      <div className='col-span-1 p-3 bg-white text-black'>

      <div><Image src={image}/></div>
      <p className='py-5'>Writing</p>
      <h1 className='font-bold text-[20]'>Webbsite Content</h1>
      <p className='text-[8px]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

      <div className='grid grid-cols-2'>
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
  )
}

export default Projects
