import React from 'react';

export const Navbar = ({ setShowPage, setConfirmPage, ConfirmPage }) => {
    const navLinks = [
        {
            id: 1,
            name: 'Home',
            link: "/#",
        },
        {
            id: 2,
            name: 'Menu',
            link: "/#",
        },
        {
            id: 3,
            name: 'About Us',
            link: "/#",
        },
        {
            id: 4,
            name: 'Contact Us',
            link: "/#",
        },
    ];
    return (
        <div>
            <div className='container'>
                <div className='px-4 py-6 flex items-center justify-between'>
                    {/* Logo section */}
                    <a href="" className='text-4xl text-white font-clicker'>Bean Scene</a>
                    {/* Section Navbar links */}
                    <div>
                        <ul className='flex gap-12 items-center justify-center'>
                            {navLinks.map((item) => (
                                <li key={item.id} className='relative'>
                                   <div className='text-white font-playfair cursor-pointer group'>
                                        <a href={item.link} className='inline-block p-2 group-hover:text-secondary duration-150 transition'>{item.name}</a>
                                        <div className='absolute group-hover:border-[1px] group-hover:border-secondary w-full duration-150 transition'></div>
                                    </div> 
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Login section */}
                    <div className='flex items-center gap-6 text-white '>
                        <div>
                            <button className={`font-playfair font-semibold py-2 px-5 ${ConfirmPage === 'signin' ? 'text-black bg-secondary rounded-full' : ''}`} 
                            onClick={() => {setShowPage(true); setConfirmPage('signin');}}
                        >Sign In</button>
                        </div>
                        <div>
                            <button className={`font-playfair font-semibold py-2 px-5 ${ConfirmPage === 'signup' ? 'text-black bg-secondary rounded-full' : ''}`}
                            onClick={() => {setShowPage(true); setConfirmPage('signup');}}
                        >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
