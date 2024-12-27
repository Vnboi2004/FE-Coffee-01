import React from 'react';
import AboutImage1 from '../../assets/images/about_1.png';
import AboutImage2 from '../../assets/images/about_2.png';
import AboutImage3 from '../../assets/images/about_3.png';
import AboutImage4 from '../../assets/images/about_4.png';
export const About = () => {
  const infoAbouts = [
    {
      id: 1,
      img: AboutImage1,
      title: 'Supreme Beans',
      description: 'Beans that provides great taste'
    },
    {
      id: 2,
      img: AboutImage2,
      title: 'High Quality',
      description: 'We provide the highest quality'
    },
    {
      id: 3,
      img: AboutImage3,
      title: 'Extraordinary',
      description: 'Coffee like you have never tasted',
    },
    {
      id: 4,
      img: AboutImage4,
      title: 'Affordable Price',
      description: 'Our Coffee prices are easy to afford',
    },
  ]; 
  return (
    <div className='pt-20'>
        <div className='container'>
          <div className='pb-4'>
              <h1 className='pb-6 text-center font-playfair font-bold text-5xl text-primary'>Why are we different?</h1>
              <p className='pb-4 text-center font-playfair text-pColors'>We don’t just make your coffee, we make your day!</p>
          </div>       
          <div className='pb-4'>
            <div className='grid grid-cols-4 place-items-center'>
              {infoAbouts.map((item) => (
                <div key={item.id} className='bg-secondary/20 border-2 border-secondary/30 min-w-[284px] cursor-pointer hover:bg-secondary/40 duration-150 transition'>
                  <div className='flex justify-center py-6'>
                    <img src={item.img} alt="" className=''/>
                  </div>
                  <div className='flex flex-col items-center gap-1 pb-8'>
                    <h1 className='text-primary font-playfair text-xl font-semibold'>{item.title}</h1>
                    <p className='font-playfair text-[0.8rem] text-pColors leading-5'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='py-6'>
                <p className='py-1 font-playfair text-pColors text-center'>Great ideas start with great coffee, Lets help you achieve that</p>
                <h1 className='pb-4 text-primary font-playfair text-2xl font-bold text-center'>Get started today.</h1>
                <div className='text-center pt-1 mb-12'>
                  <button className='px-8 py-2 bg-secondary font-semibold font-playfair rounded-full hover:bg-secondary/70 hover:scale-105 duration-200 transition'>Join us</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
