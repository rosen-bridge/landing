"use client";
import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const GuardCard = ({src, title}) => {
    return (
        <div>
            <div className="shadow-md p-8 bg-white border rounded-lg w-56">
                <div className="rounded-full bg-slate-100 h-40 w-40 flex justify-center items-center text-white font-bold">
                    LOGO
                </div>
            </div>
            <p className="text-center text-white mt-2">{title}</p>
        </div>
    )
}

export default function GuardSet() {
    const guardsList = [
        {title: "First Guard"},
        {title: "Second Guard"},
        {title: "Third Guard"},
        {title: "4th Guard"},
        {title: "5th Guard"},
    ]
    return (
        <Fragment>
            <Heading
                title="Guard set"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc."
            />
            <div className="bg-primary py-8 mt-16">
                <Swiper
                    spaceBetween={40}
                    slidesOffsetBefore={96}
                    slidesOffsetAfter={96}
                    slidesPerView={'auto'}
                    autoplay
                    className="mt-negative"
                    navigation
                    modules={[Navigation]}
                >
                    {guardsList. map((item, index) => (
                        <SwiperSlide className="w-fit" key={index}>
                            <GuardCard {...item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    )
}
