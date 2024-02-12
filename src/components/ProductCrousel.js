"use client"
import React, { useRef, useEffect, useState } from 'react'
import { client } from '../../sanity';
import urlFor from '../../ImgUrl';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductCrousel = () => {
    const [product, setProduct] = useState([]);
    const getProducts = async () => {
        const query = `*[_type == 'home' && title == 'AlwaysIconic' ]{
             images,
                _id,
        }`
        const products = await client.fetch(query);
        setProduct(products[0].images);
    }
    useEffect(() => {
        getProducts()
    }, [])


    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };


    return (
        <div className='product-crousel relative px-[25px]'>
            <div className='absolute top-44 left-[3.3vw] flex-row hidden lg:flex z-40 gap-x-[85vw]'>
                <div className='hover:shadow-md cursor-pointer p-3 bg-opacity-30 rounded-full' onClick={prevHandler}><ArrowBackIosIcon className='text-[black] ml-[1px]' /></div>
                <div className='hover:shadow-md cursor-pointer p-3 bg-opacity-30 rounded-full' onClick={nextHandler}><ArrowForwardIosIcon className='text-[black] ml-[1px]' /></div>
            </div>
            <h3 className='font-semibold text-2xl'>Always Iconic</h3>
            <div className='my-5'>
                <Swiper
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        460: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 60
                        },
                        1300: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                    slidesPerView={3}
                    spaceBetween={10}
                    onSwiper={(swiper) => setSwiperRef(swiper)}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="HelpSwiper"
                >

                    {
                        product.map((item, index) => <SwiperSlide key={index}> <div className='w-[45vw] md:w-[19vw] p-1 h-full'><img src={urlFor(item)} alt='' /></div></SwiperSlide>)
                    }


                </Swiper>
            </div>
            <Fade triggerOnce="true" duration={200}>
            </Fade>
        </div>
    )
}

export default ProductCrousel