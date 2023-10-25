import React from "react";
import GuardSet from "./_sections/GuardSet";
import RoadMap from "./_sections/RoadMap";
import Hero from "./_sections/Hero";
import Tokenomics from "./_sections/Tokenomics";
import GetStarted from "./_sections/GetStarted";
import Architecture from "./_sections/Architecture";
import Features from "./_sections/Features";
import Verifications from "./_sections/Verifications";
import { Watchers } from "./_sections/Watchers";

export default function Home() {
    return (
        <main className="pt-24">
            <section className="w-full">
                <Hero/>
            </section>
            <section id="guard-set" className="w-full">
                <GuardSet/>
            </section>
            <section id="features">
                <Features/>
            </section>
            <section id="architecture">
                <Architecture/>
            </section>
            <section id="verifications">
                <Verifications/>
            </section>
            <section id="watchers">
                <Watchers/>
            </section>
            <section id="tokenomics">
                <Tokenomics/>
            </section>
            <section id="road-map">
                <RoadMap/>
            </section>
            {/* <section>
                <GetStarted/>
            </section> */}
        </main>
    )
}
