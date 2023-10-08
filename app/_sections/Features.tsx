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
            title: "Cryptographic Assurance",
            description: "Relies on trustworthy multi-party signatures",
            icon: <i className="uil uil-users-alt"/>,
        },
        {
            title: "Offline Verification",
            description: "Employs offline payment verification through trusted parties",
            icon: <i className="uil uil-cloud-block"/>,
        },
        {
            title: "Smart Contract Validation",
            description: "Ensures the integrity through smart contract validation",
            icon: <i className="uil uil-file-check"/>,
        },
        {
            title: "Scalable",
            description: "Easily accommodates new chains by integrating independent, chain-specific modules",
            icon: <i className="uil uil-scaling-left"/>,
        },
        {
            title: "Expandable",
            description: "Adding new chains is straightforward, requiring minimal expertise, with the primary procedure centered around Ergo",
            icon: <i className="uil uil-expand-from-corner"/>,
        },
        {
            title: "Auditable",
            description: "Facilitates seamless auditing by tracking events on the Ergo blockchain",
            icon: <i className="uil uil-file-search-alt"/>,
        }
    ]
    return (
        <Fragment>
            <Heading
                subtitle="Features"
                title="Why Rosen Bridge"
            />
            <div className="block mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
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