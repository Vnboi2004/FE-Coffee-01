import React from 'react';
import AboutUsImage from '../../assets/images/AboutUs.png';

export const Search = () => {
  const backgroundStyle = {
    backgroundImage: `url(${AboutUsImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '374px',
    position: 'relative',
  };
  return (
    <div style={backgroundStyle} className='relative'>
      <div className='absolute bg-primary opacity-80 w-full h-full'></div>
      <div className='absolute w-full h-full z-[1]'>
        <div className='container h-full'>
          <div className='flex flex-col items-center justify-center h-full gap-6'>
            <h1 className='text-white text-5xl font-playfair font-bold'>Subscribe to get the Latest News</h1>
            <p className='text-white font-playfair pt-1'>Don’t miss out on our latest news, updates, tips and special offers</p>
            <div className='w-full px-[29%] flex items-center'>
              <input type="email" placeholder='Enter your email' className='w-full h-[60px] rounded-l-sm outline-none pl-4 font-playfair text-[1.125rem] leading-6'/>
              <p className='bg-secondary h-[60px] px-7 py-[1.125rem] rounded-r-sm text-primary font-semibold font-playfair text-[1.125rem] leading-6 cursor-pointer hover:bg-secondary/70'>Suscribe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
