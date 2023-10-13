import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const DescriptionBox = ({title, img, right=false, children}: {title: string, img: string, right?: boolean, children: any}) => (
    <div className="block mb-8">
        <div className={`w-full md:w-1/2 lg:w-1/3 ${right ? 'float-left me-8' : 'float-right ms-8'} mb-4 p-4`}>
            <img src={`/assets/architecture/${img}`} className="w-full max-w-xs"/>
        </div>
        <h3 className={`relative mb-4 ${!right ? "clear-left" : ""}`}>
            <span className="heading-2">{title}</span>
        </h3>
        {children}
    </div>
)

const Text = ({children}: {children: any}) => {
    return (
        <p className="text-primary mb-2">{children}</p>
    )
}

const StickyBackground = () => (
    <div className="sticky top-0 -z-10 w-full h-0 p-12 -mt-32 mb-24">
        <svg viewBox="0 0 160 90" className="blur-2xl opacity-10">
            <circle cx={120} cy={30} r={40} className="cold"/>
            <circle cx={40} cy={60} r={30} className="hot"/>
        </svg>
    </div>
)

export default function Architecture() {
    return (
        <Fragment>
            <Heading
                title="Architecture"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc."
                className="mt-16"
            />
            <StickyBackground/>
            <div className="block lg:w-3/4">
                <img alt="Rosen architecture" src="./assets/architecture/rosen-architecture.png"/>
            </div>
            <DescriptionBox title="Guard set" img="rosen-architecture-guardset.png">
                <Text>The Guard Set serves as a trusted entity responsible for executing the final transfer actions, dividing the bridge fee between engaged entities and deciding bridge administration settings. To process events, each guard independently verifies reports and subsequently reaches a consensus on a unique transaction for that event payment.</Text>
                <Text>Each transaction requires the signatures of a quorum of guards. Thus, one or a few potentially malicious guards cannot generate arbitrary transactions to access the bridge&apos;s assets without proper authorization.</Text>
            </DescriptionBox>
            <DescriptionBox title="Watcher" img="rosen-architecture-watchers.png" right>
                <Text>Watchers responsibility is monitoring the network and reporting bridge-related events. This process involves two steps: first a preliminary report with event digest, then submit a final report with details once multiple watchers confirm the same event. </Text>
                <Text>The lack of details in preliminary reports necessitates the individual network monitoring and prevents cascading faults. Watchers are rewarded for accurate reports but may face penalties for fraud.</Text>
                <Text>
                    Check out 
                    <a href="#watchers" className="color-accent hover:border-b-4 border-accent mx-1">here</a> 
                    if you want to contribute as a watcher.
                </Text>
            </DescriptionBox>
            <DescriptionBox title="Rewards" img="rosen-architecture-rewards.png">
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc.</p>
            </DescriptionBox>
            <DescriptionBox title="RSN" img="rosen-architecture-rsn.png" right>
                <Text>The RSN token defines the bridge participation rights. Holders of this token are eligible to engage as watchers within the bridge ecosystem. </Text>
                <Text>Watchers must hold report permits to submit reports, which enables them to receive rewards. Any volunteer can obtain a report permit by locking RSN as a guarantee. Watchers can retrieve their locked RSN by returning the report permits.</Text>
            </DescriptionBox>
            <DescriptionBox title="Cold storage" img="rosen-architecture-cold.png">
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc.</p>
            </DescriptionBox>
            <DescriptionBox title="Funds" img="rosen-architecture-funds.png" right>
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </DescriptionBox>
            <div className="clear-both"/>
        </Fragment>
    )
}
