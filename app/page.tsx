import React from "react";
import Heading from "../components/typography/Heading";
import GuardSet from "./_sections/GuardSet";
import RoadMap from "./_sections/RoadMap";
import Hero from "./_sections/Hero";
import Tokenomics from "./_sections/Tokenomics";
import GetStarted from "./_sections/GetStarted";

export default function Home() {
    return (
        <main className="pt-24">
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
                <Tokenomics/>
            </section>
            <section id="road-map">
                <RoadMap/>
            </section>
            <section>
                <GetStarted/>
            </section>
        </main>
    )
}
