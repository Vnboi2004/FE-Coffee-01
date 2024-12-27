import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import authorImage from '../../assets/images/author.png';
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import flow1 from '../../assets/images/flow_1.png';
import flow2 from '../../assets/images/flow_2.png';
export const Portfolio = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const SliderInfo = [
        {
            id: 1,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            author: "Truong Phuoc Hung",
            Project: "Project Manager", 
            img: authorImage,
        },
        {
            id: 2,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            author: "Nguyen Thanh Do",
            Project: "Project Manager",
            img: authorImage,
        },
        {
            id: 3,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            author: "Tran Trung Hau",
            Project: "Project Manager",
            img: authorImage,
        },
        {
            id: 4,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            author: "Nguyen Van Love",
            Project: "Project Manager",
            img: authorImage,
        },
    ];
    const settings = {
        modules: [Navigation],
        navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
        pagination: { clickable: true },
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
      };
    
    const handleButton = (swiper) => (swiperRef.current = swiper);
    useEffect(() => {
        if (swiperRef.current) {
          swiperRef.current.params.navigation.prevEl = prevRef.current;
          swiperRef.current.params.navigation.nextEl = nextRef.current;
          swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className='py-20 relative'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center'>
                    <h1 className='pb-6 text-5xl font-playfair font-bold text-primary'>Our coffee perfection feedback</h1>
                    <p className='font-playfair text-pColors'>Our customers has amazing things to say about us</p>
                </div>
                <div className='relative pt-10'>
                    <Swiper {...settings} onSwiper={handleButton}>
                        {SliderInfo.map((item) => (
                            <SwiperSlide key={item.id} className='px-48 pb-16 relative cursor-pointer'>
                                <div className='pt-[8.5rem] pb-24 bg-secondary/20 border-2 border-secondary/30'>
                                    <div className='flex flex-col items-center justify-center px-32'>
                                        <p className='font-playfair text-pColors text-base leading-[1.75rem]'>{item.description}</p>
                                        <h1 className='pt-12 pb-2 text-2xl font-playfair font-bold text-primary'>{item.author}</h1>
                                        <p className='font-playfair text-pColors'>{item.Project}</p>
                                    </div>
                                </div>
                                <img src={item.img} alt="" className='absolute bottom-3 left-1/2 -translate-x-1/2 h-[112px] rounded-xl'/>
                                <p className='absolute text-[14rem] -top-12 left-56 font-playfair font-semibold text-primary'>“</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button ref={prevRef} className='absolute top-1/2 -translate-y-16 left-[9.5rem] text-3xl bg-secondary p-6 rounded-2xl group cursor-pointer z-[999]'>
                        <TiArrowLeft className='group-hover:-translate-x-2 duration-150 transition'/>
                    </button>
                    <button ref={nextRef} className='absolute top-1/2 -translate-y-16 right-[9.5rem] text-3xl bg-secondary p-6 rounded-2xl group cursor-pointer z-[999]'>
                        <TiArrowRight className='group-hover:translate-x-2 duration-150 transition'/>
                    </button>
                </div>
            </div>
            <div className='absolute top-1/2 translate-y-1/4 left-0 z-[999]'>
                <img src={flow1} alt="" />
            </div>
            <div className='absolute top-0 translate-y-1/3 right-0 z-[999]'>
                <img src={flow2} alt=""/>
            </div>
        </div>
    )
}
