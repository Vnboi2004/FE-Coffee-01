import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import ImageBgHero from '../../assets/images/coffee_image.png';

const backGroundStyles = {
    backgroundImage: `url(${ImageBgHero})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh'
};

export const Hero = ({ setShowPage, setConfirmPage, ConfirmPage }) => {
  return (
    <div style={backGroundStyles}>
        {/* Components header */}
        <Navbar setShowPage={setShowPage} setConfirmPage={setConfirmPage} ConfirmPage={ConfirmPage}/>
        {/* Component content header */}
        <div className='container'>
          <div className='grid grid-cols-2'>
            {/* Content section */}
            <div className='text-white px-4 py-20'>
                <h3 className='py-4 font-playfair text-xl'>We’ve got your morning covered with</h3>
                <h1 className='py-4 text-[13rem] leading-[1] font-clicker'>Coffee</h1>
                <p className='py-4 font-playfair text-base leading-[1.75rem]'>
                  It is best to start your day with a cup of coffee. Discover the <br/>
                  best flavours coffee you will ever have. We provide the best <br/>
                  for our customers.
                </p>
                <div className='py-2'>
                  <button className='px-6 py-3 font-playfair text-black font-semibold bg-secondary rounded-3xl hover:bg-secondary/70 hover:scale-105 duration-200 transition'>Order Now</button>
                </div>
            </div>
            <div></div>
          </div>
        </div>
    </div>
  )
}
