"use client";
import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const GuardCard = ({title, image, className=""}: {title: string, image?: string, className?: string}) => {
    return (
        <div>
            <div className={"w-44 h-44 shadow-md p-8 bg-white border rounded-lg flex justify-center items-center "+className}>
                {/* <div className="rounded-full h-28 w-28 font-bold"> */}
                    {image ? (
                        <img src={`assets/guardset/${image}`} alt={`Logo of ${title}`}/>
                    ):(
                        <i className="uil uil-shield-question text-slate-100 text-6xl"/>
                    )}
                {/* </div> */}
            </div>
            {/* <div className="shadow-md p-8 bg-white border rounded-lg w-44">
                <div className="rounded-full text-slate-100 h-28 w-28 flex justify-center items-center font-bold">
                    {image ? (
                        <img src={`assets/guardset/${image}`} alt={`Logo of ${title}`}/>
                    ):(
                        <i className="uil uil-shield-question text-5xl"/>
                    )}
                </div>
            </div> */}
            <p className="text-center text-white mt-2">{title}</p>
        </div>
    )
}

export default function GuardSet() {
    const guardsList = [
        {title: "Nautilus and Machina Finance", image: "nautilus-and-machina.png", className: "p-3"},
        {title: "Spectrum", image: "spectrum.png"},
        {title: "ErgoPad", image: "ergopad.svg"},
        {title: "Lilium", image: "lilium.svg"},
        {title: "Minotaur and ErgoRaffle", image: "minotaur-and-raffle.png", className: "p-2"},
        {title: ""},
        {title: "Zengate", image: "zengate.svg"},
        {title: "Sigmanauts", image: "sigmanauts.jpeg"},
        {title: "Rosen Core 1", image: "rosen.svg"},
        {title: "Rosen Core 2", image: "rosen.svg"},
  ]
    return (
        <Fragment>
            <Heading title="Guard set" />
            <div className="bg-primary py-8 mt-16">
                <Swiper
                    spaceBetween={40}
                    slidesOffsetBefore={32}
                    slidesOffsetAfter={32}
                    slidesPerView={'auto'}
                    autoplay
                    className="mt-negative"
                    // wrapperClass="swiper-wrapper lg:justify-center"
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
