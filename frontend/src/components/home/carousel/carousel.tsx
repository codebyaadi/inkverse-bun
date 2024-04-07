import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { CarouselInterface } from "@/types/carousel.type";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./carousel.css";

interface CarouselProps {
    data: CarouselInterface[];
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleInit = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <section
            id="head-carousel"
            className="flex flex-col justify-start"
        >
            <div className="relative block w-full h-full overflow-hidden my-0 mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={6}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: false }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    onSlideChange={handleSlideChange}
                    onInit={handleInit}
                    className="overflow-hidden w-full relative mx-auto"
                >
                    {data.slice(0, 8).map((carousel, index) => (
                        <SwiperSlide key={index} className="w-[30rem] md:!h-[30rem] h-[24rem] relative">
                            <Link to="/" className="flex w-full h-full relative">
                                <img
                                    src={carousel.cover}
                                    alt={carousel.title}
                                    className="w-full h-full rounded-md object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"
                                ></div>
                                {index === activeIndex && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="font-dmsans z-10 absolute bottom-0 left-0 mb-16 md:ml-8 ml-0 md:px-0 px-5 flex items-center justify-center text-white"
                                    >
                                        <div>
                                            <h3 className="font-bold text-3xl">{carousel.title}</h3>
                                            <p className="text-sm text-white/60">{carousel.categories.join(" • ")}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
