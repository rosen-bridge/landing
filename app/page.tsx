import React from "react";
import Image from 'next/image'
import Button from "../components/buttons/Button";
import Heading from "../components/typography/Heading";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
                <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium color-primary leading-normal">
                        Lorem ipsum dolor sit <span className="color-accent italic">amet!</span>
                    </h1>
                    <p className="mt-4 mb-6 text-secondary text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc.
                    </p>
                    <Button>Get started</Button>
                </div>
                <div className="flex w-full">

                </div>
            </section>

            <section id="guard-set">
                <Heading
                    title="Guard set"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc."
                />
                <div className="h-80"/>
            </section>

            <section id="architecture">
                <Heading
                    title="Architecture"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc."
                />
                <div className="h-80"/>
            </section>

            <section id="tokenomics">
                <Heading
                    title="Tokenomics"
                />
                <div className="h-80"/>
            </section>

            <section id="road-map">
                <Heading
                    title="Road map"
                />
                <div className="h-80"/>
            </section>
        </main>
    )
}
