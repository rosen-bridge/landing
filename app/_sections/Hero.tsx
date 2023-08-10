import React from "react";
import Button from "../../components/buttons/Button";
import StatItem from "../../components/typography/StatItem";

export default function Hero() {
    return (
        <div className="relative">
            <div className="absolute -z-10 w-full h-full">
                <svg viewBox="0 0 160 90" className="blur-2xl opacity-10">
                    <circle cx={40} cy={10} r={40} className="cold"/>
                    <circle cx={120} cy={20} r={50} className="hot"/>
                </svg>
            </div>
            <div className="block grid grid-cols-1 md:grid-cols-2">
                <div className="col-start-1 md:col-start-2">
                    <img className="scale-125" src="./assets/hero/hero.svg"/>
                </div>

                <div className="row-start-2 md:row-start-1  flex flex-col justify-center items-start pe-16 pt-16">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold color-primary leading-normal">
                        Lorem ipsum dolor sit <span className="color-accent italic">amet!</span>
                    </h1>
                    <p className="mt-4 mb-6 text-secondary text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus.
                    </p>
                    <Button>Get started</Button>

                    <div className="mt-16 flex gap-16">
                        <StatItem label="lorem ipsum" value={1.5e7}/>
                        <StatItem label="dolor sit" value={100}/>
                        <StatItem label="consectetur" value={5000}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
