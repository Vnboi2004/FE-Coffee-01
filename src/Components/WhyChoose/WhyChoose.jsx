import React from 'react';
import CoffeeImage1 from '../../assets/images/drink_1.png';
import CoffeeImage2 from '../../assets/images/drink_2.png';
import CoffeeImage3 from '../../assets/images/drink_3.png';
import CoffeeImage4 from '../../assets/images/drink_4.png';
export const WhyChoose = () => {
    const infoDrink = [
        {
            id: 1,
            img: CoffeeImage1,
            name: 'Cappuccino',
            ingredient: 'Coffee 50% | Milk 50%',
            price: '$8.50'
        },
        {
            id: 2,
            img: CoffeeImage2,
            name: 'Chai Latte',
            ingredient: 'Coffee 50% | Milk 50%',
            price: '$8.50'
        },
        {
            id: 3,
            img: CoffeeImage3,
            name: 'Macchiato',
            ingredient: 'Coffee 50% | Milk 50%',
            price: '$8.50'
        },
        {
            id: 4,
            img: CoffeeImage4,
            name: 'Expresso',
            ingredient: 'Coffee 50% | Milk 50%',
            price: '$8.50'
        },
    ];
    return (
        <div className=''>
            <div className='container'>
                {/* header section */}
                <div className='pb-4'>
                    <h1 className='pb-6 text-center font-playfair font-bold text-5xl text-primary'>Enjoy a new blend of coffee style</h1>
                    <p className='pb-4 text-center font-playfair text-pColors'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
                </div>
                {/* Choose section one */}
                <div className='py-1'>
                    <div className='grid grid-cols-4 place-items-center'>
                        {infoDrink.map((item) => (
                            <div key={item.id} className='bg-secondary/20 relative'>
                                <img src={item.img} alt="" />
                                <div className='flex flex-col items-center gap-1 pt-3 pb-12 border-b-2 border-x-2 border-secondary/30'>
                                    <h1 className='text-primary font-playfair text-xl font-semibold'>{item.name}</h1>
                                    <p className='font-playfair text-[0.8rem] leading-5'>{item.ingredient}</p>
                                    <p className='font-playfair text-primary'>{item.price}</p>
                                </div>
                                <div className='absolute -bottom-4 left-1/2 -translate-x-1/2'>
                                    <button className='px-4 py-2 bg-secondary font-semibold font-playfair rounded-full hover:bg-secondary/70 hover:scale-105 duration-200 transition'>Order Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
