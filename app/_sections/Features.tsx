import Heading from "@/components/typography/Heading";
import { Fragment } from "react";

export default function Features() {
    const features = [
        {
            title: "Multi-Layer Protection",
            description: "Safeguarded by two distinct layers of security",
            icon: <i className="uil uil-layer-group"/>,
        },
        {
            title: "Ergo-Centric",
            description: "Uses Ergo as a secure and cost efficient hub, reducing the need for several smart contracts on every chain. Facilitates linear growth complexity.",
            icon: <i className="uil uil-sigma"/>,
        },
        {
            title: "Incentivised",
            description: "Watchers and Guards are being rewarded in a Proof of Event scheme.",
            icon: <i className="uil uil-gift"/>,
        },
        {
            title: "Open Source",
            description: "Safe and solid, with openly accessible source code for public review and inspection",
            icon: <i className="uil uil-arrow"/>,
        },
        {
            title: "Auditable Trace",
            description: "Facilitates seamless auditing by tracking events on the Ergo blockchain",
            icon: <i className="uil uil-file-search-alt"/>,
        },
        {
            title: "Risk Minimized",
            description: "Reducing hackers' incentives and gains utilizing cold storage",
            icon: <i className="uil uil-keyhole-square"/>,
        },
        {
            title: "Direct Verification",
            description: " Relying on direct off-chain verification of events in the origin blockchain with no smart contract or proof dependency and in a recurring and independent manner.",
            icon: <i className="uil uil-file-check-alt"/>,
        },
        {
            title: "Scalable",
            description: "Easily accommodates new chains by integrating independent, chain-specific modules.",
            icon: <i className="uil uil-expand-from-corner"/>,
        },
        {
            title: "Slow and Safe",
            description: "Delayed verification and waiting for enough confirmations and consensus over events before taking actions.",
            icon: <i className="uil uil-shield"/>,
        }
    ]
    return (
        <Fragment>
            <Heading
                subtitle="Features"
                title="Why Rosen Bridge"
            />
            <div className="block mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    {features.map((item, index) => (
                        <div key={index} className="">
                            <div className="mx-auto w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center text-lg">
                                {item.icon}
                            </div>
                            <h5 className="text-primary text-md text-center font-bold mt-3">{item.title}</h5>
                            <p className="text-secondary text-sm text-center mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}