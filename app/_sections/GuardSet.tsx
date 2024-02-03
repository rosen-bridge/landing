"use client";
import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const GuardCard = ({title, image, className=""}: {title: string, image?: string, className?: string}) => {
    return (
        <div className="w-44 mx-auto mb-8">
            <div className={"h-44 shadow-md p-8 bg-white border rounded-lg flex justify-center items-center "+className}>
                {image ? (
                    <img src={`assets/guardset/${image}`} alt={`Logo of ${title}`}/>
                ):(
                    <i className="uil uil-shield-question text-slate-100 text-6xl"/>
                )}
            </div>
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
        {title: "Duckpools", image: "duckpools.svg"},
        {title: "Zengate", image: "zengate.svg"},
        {title: "Sigmanauts", image: "sigmanauts.jpeg"},
        {title: "Rosen Core 1", image: "rosen.svg"},
        {title: "Rosen Core 2", image: "rosen.svg"},
  ]
    return (
        <Fragment>
            <Heading title="Guard Set" />
            <div className="bg-primary pt-8 pb-4 mt-16">
                <div className="block mt-negative">
                    <Swiper
                        slidesOffsetBefore={2}
                        slidesOffsetAfter={2}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 3,
                            },
                            1024: {
                              slidesPerView: 4,
                            },
                            1280: {
                              slidesPerView: 5,
                            },
                            1536: {
                              slidesPerView: 6,
                            }
                          }}
                        autoplay={{
                            delay: 2500,
                        }}
                        loop
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {guardsList. map((item, index) => (
                            <SwiperSlide key={index}>
                                <GuardCard {...item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Fragment>
    )
}
