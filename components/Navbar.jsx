import React from 'react'
import Image from 'next/image'
import { logo } from '@/public/laura'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
    <nav className='flex justify-between pt-2 lg:pt-8'>
      <div className=''>
      <Image src={logo} className=""/>
      </div>

      <div>
          <ul className='md:flex gap-8 p-5 hidden'>
              <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Home</li>
              <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Our Services</li>
              <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Projects</li>
              <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Pricing</li>
              <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Contact us</li>
          </ul>
      </div>

      <div className="mr-2 md:hidden">
        <button type="button" onClick={()=> setToggle((prev)=> !prev)}  className="bg-gray-800 inline-fslex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
        
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        </div>

    </nav>

    <div  className={`${toggle ? 'flex' : 'hidden' } md:hidden `} >
    <div className=' text-left'>

    <ul className='flex flex-col gap-3 p-2'>
    <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Home</li>
    <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Our Services</li>
    <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Projects</li>
    <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Pricing</li>
    <li className='hover:bg-gray-400 px-2 rounded-md py-1 text-white cursor-pointer'>Contact us</li>
</ul>

    </div>
    </div>
      
    </div>
  )
}

export default Navbar
