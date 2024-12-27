import React from 'react';
import BannerImage from '../../assets/images/banner.png';
import flowImage from '../../assets/images/coffee_blast.png';
export const Banner = () => {
    return (
        <div className='px-4 py-[4.5rem] relative'>
            <div className='container'>
                <div className='grid grid-cols-2'>
                    {/* Section description */}
                    <div className='py-12'>
                        <h1 className='py-4 text-5xl font-playfair font-bold text-primary'>Discover the best coffee</h1>
                        <p className='py-4 font-playfair text-pColors text-base text-[0.95rem] leading-[1.5rem]'>
                            Bean Scene is a coffee shop that provides you with quality coffee <br/>
                            that helps boost your productivity and helps build your mood. <br/>
                            Having a cup of coffee is good, but having a cup of real coffee is <br/>
                            greater. There is no doubt that you will enjoy this coffee more <br/>
                            than others you have ever tasted.
                        </p>
                        <div className='py-4'>
                            <button className='bg-secondary px-5 py-3 rounded-3xl font-playfair font-semibold hover:bg-secondary/70 hover:scale-105 duration-200 transition'>Learn More</button>
                        </div>
                    </div>
                    {/* Section images */}
                    <div className='flex justify-end'>
                        <img src={BannerImage} alt="" className='max-w-[450px]'/>
                    </div>
                </div>
            </div>
            <div className='absolute top-[20rem] -left-1'>
                <img src={flowImage} alt="" />
            </div>
            <div className='absolute top-1/2 left-1/2'>
                <div className='w-[20px] h-[20px] bg-secondary rounded-full'></div>
            </div>
        </div>
    )
}
