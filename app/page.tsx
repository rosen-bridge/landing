import React from "react";
import Heading from "../components/typography/Heading";
import GuardSet from "./_sections/GuardSet";
import RoadMap from "./_sections/RoadMap";
import Hero from "./_sections/Hero";

export default function Home() {
    return (
        <main className="pt-24 overflow-x-hidden">
            <section className="w-full">
                <Hero/>
            </section>
            <section id="guard-set" className="w-full">
                <GuardSet/>
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
                <RoadMap/>
            </section>
        </main>
    )
}
