import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className=''>
        
    <div className='grid lg:grid-cols-2 grid-cols-1 px-3 md:px-10 lg:px-24 bg-my_bg_image bg-cover '>
      <div className='col-span-1  '>
      <h1 className=' font-extrabold font-alien lg:text-5xl pt-20 text-[20px] lg:text-[40px] '>Elevate your <br className='hidden md:block'/> business  to new <br className='hidden md:flex'/>heights with web 3<br className='hidden md:flex' /> marketing experts
      </h1>

      <p className=' lg:font-[20px] pt-5'>We specialize in helping industry-leading companies acquire <br className='hidden md:flex'/> high-value users at profitable prices. Your success is our <br className='hidden md:flex'/> passion. Let us help your business thrive.
      </p>

      <div className='flex pl-[10%] pt-5 mb-10 lg:mb-48'>
      <button className='px-6 py-3 bg-green-400 text-sm'> contact us now </button>

      </div>

     
     
      </div>
      <div className='col-span-1 '>
      
      </div>
    </div>
    
    </div>
    </div>
  )
}

export default Hero
