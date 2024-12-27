import React from 'react'
import FooterImage from '../../assets/images/fotter_image.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import footerPattern1 from "../../assets/images/footer_1.png";
import footerPattern2 from "../../assets/images/footer_2.png";
const Footer = () => {
     const backgroundStyle = {
        backgroundImage: `url(${FooterImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
    };
    return (
        <div className='relative bg-gradient-to-t from-primary to-primary h-[500px]'>
            <div style={backgroundStyle} className='absolute w-full h-full'></div>
            <div className='absolute w-full h-full bg-gradient-to-b from-primary to-primary/80'></div>
            <div className='absolute w-full h-full'>
                <div className='container'>
                    <div className="grid grid-cols-3 pt-48">
                        {/* Section footer 1 */}
                        <div className="flex flex-col justify-center items-start gap-6 col-span-1">
                            <h1 className="text-5xl text-white font-clicker">Bean Scene</h1>
                            <p className="text-white font-playfair text-xs leading-[1.25rem]">
                            Lorem Ipsum is simply dummy text of the printing and <br />
                            typesetting industry. Lorem Ipsum has been the industry's <br />
                            standard dummy text ever since the 1500s, when an <br />
                            unknown printer took a galley of type and scrambled it to <br />
                            make a type specimen book.
                            </p>
                            <div className="flex justify-center items-start gap-5 text-white">
                            <FaFacebook className='hover:scale-125 duration-300 transition cursor-pointer'/>
                            <AiFillInstagram className='hover:scale-125 duration-300 transition cursor-pointer'/>
                            <FaGithubAlt className='hover:scale-125 duration-300 transition cursor-pointer'/>
                            <FaTwitter className='hover:scale-125 duration-300 transition cursor-pointer'/>
                            </div>
                        </div>

                        {/* Section footer 2 */}
                        <div className="grid grid-cols-3 col-span-2">
                            {/* Section sub footer 1 */}
                            <div>
                            <h1 className="text-white text-2xl font-playfair font-semibold pb-9">
                                About
                            </h1>
                            <div className="flex flex-col gap-4 text-white font-playfair">
                                <p>Menu</p>
                                <p>Features</p>
                                <p>News & Blogs</p>
                                <p>Help & Supports</p>
                            </div>
                            </div>
                            {/* Section sub footer 2 */}
                            <div>
                            <h1 className="text-white text-2xl font-playfair font-semibold pb-9">
                                Company
                            </h1>
                            <div className="flex flex-col gap-4 text-white font-playfair">
                                <p>How we work</p>
                                <p>Terms of service</p>
                                <p>Pricing</p>
                                <p>FAQ</p>
                            </div>
                            </div>
                            {/* Section sub footer 3 */}
                            <div>
                            <h1 className="text-white text-2xl font-playfair font-semibold pb-9">
                                Contact Us
                            </h1>
                            <div className="flex flex-col gap-4 text-white font-playfair">
                                <p>48/3/3A Đ. So 3, Truong Tho, Thu Duc, Ho Chi Minh, Viet Nam</p>
                                <p>+84 918-488-431</p>
                                <p>insect228060132902060400006417@gmail.com</p>
                                <p>www.beanscene.com</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           {/* position pattern */}
           <div className='absolute -top-1/2 translate-y-10 left-0'>
                <img src={footerPattern1} alt="" />
           </div>
           <div className='absolute -top-1/2 translate-y-10 right-0'>
                <img src={footerPattern2} alt="" />
           </div>
        </div>
    )
}

export default Footer
