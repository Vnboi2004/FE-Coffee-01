import React from 'react';
import AboutUsImage from '../../assets/images/AboutUs.png';
import CoffeeImage from '../../assets/images/cup.png';
import CoffeeBean from '../../assets/images/coffee_bean.png';

export const AbouUs = () => {
    const backgroundStyle = {
        backgroundImage: `url(${AboutUsImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '574px',
        position: 'relative',
    };
    return (
        <div style={backgroundStyle} className='relative'>
            <div className='absolute bg-primary opacity-80 w-full h-full'></div>
            <div className='absolute bottom-0 right-0'>
                <img src={CoffeeBean} alt="" />
            </div>
            <div className='absolute w-full h-full z-[1]'>
                <div className='container'>
                    <div className='grid grid-cols-2 px-4'>
                        {/* Content section */}
                        <div className='py-32'> 
                            <h1 className='py-6 text-white text-4xl leading-[2.75rem] font-playfair font-semibold'>Get a chance to have an <br/> Amazing morning</h1>
                            <p className='text-white font-playfair'>
                                We are giving you are one time opportunity to <br/>
                                experience a better life with coffee.
                            </p>
                            <div className='py-8'>
                                <button className='bg-secondary text-black font-playfair font-semibold px-4 py-2 rounded-full hover:bg-secondary/70 hover:scale-105 duration-200 transition'>Order Now</button>
                            </div>
                        </div>
                        {/* Image section */}
                        <div className='flex justify-center py-14'>
                            <img src={CoffeeImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}


