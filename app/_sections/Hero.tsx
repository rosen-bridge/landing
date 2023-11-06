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
                    <img className="lg:scale-125" src="./assets/hero/hero.svg"/>
                </div>
                <div className="row-start-2 md:row-start-1  flex flex-col justify-center items-start md:pe-16 lg:pt-16">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold color-primary leading-normal">
                        <span className="color-accent italic">Rosen Bridge,</span> an open-source protocol for cross-chain asset transfers.
                    </h1>
                    <p className="mt-4 mb-6 text-secondary text-lg lg:text-2xl">
                        - Incentivized Auditing<br/>
                        - Ongoing Monitoring<br/>
                        - Transparent Reporting
                    </p>
                    <Button disabled>Launch App (Soon)</Button>
                    {/* <div className="mt-16 flex gap-16">
                        <StatItem label="lorem ipsum" value={1.5e7}/>
                        <StatItem label="dolor sit" value={100}/>
                        <StatItem label="consectetur" value={5000}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
