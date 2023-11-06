import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const DescriptionBox = ({title, img, right=false, children}: {title: string, img: string, right?: boolean, children: any}) => (
    <div className="block mb-8">
        <div className={`w-full md:w-1/2 lg:w-1/3 ${right ? 'float-left me-8' : 'float-right ms-8'} mb-4 p-4`}>
            <img alt={`Picture of ${title}`} src={`/assets/architecture/${img}`} className="w-full max-w-xs"/>
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
                description="Rosen is an Ergo-centric bridge fortified with multi-layered security protection. In the initial layer, Watchers monitor network activities and report valid bridge-related events to the subsequent layer, Guards. These Guards then carefully process the reported events and execute required actions. 
                In brief, Guards are dedicated to security maintenance and executing responses, while Watchers are focused on the ongoing monitoring of activities and transparent reporting."
                className="mt-16"
            />
            <StickyBackground/>
            <div className="block lg:w-3/4">
                <img alt="Picture of Rosen architecture" src="./assets/architecture/rosen-architecture.png"/>
            </div>
            <DescriptionBox title="Guard Set" img="rosen-architecture-guardset.png">
                <Text>Guards are a federated group of entities managing the Rosen core. Their authority over Rosen is restricted through multisignature contracts and wallets. Failure or collusion of Guards will be tolerated while the majority of Guards are healthy. Each Guard has a reasonable amount of funds locked as collateral and will lose all their funds at once in case of malicious behaviour.</Text>
            </DescriptionBox>
            <DescriptionBox title="Watcher" img="rosen-architecture-watchers.png" right>
                <Text>Watchers are entities tasked with monitoring a given blockchain (e.g., Cardano, Bitcoin, Ethereum, etc.) and reporting bridge-related events on Ergo. Each blockchain has its own dedicated set of Watchers working together as a cross-chain oracle for Rosen. Watchers will be rewarded for settled transfers but may face penalties for fraud. Anyone can participate as a Watcher once allocating enough RSN and ERG.</Text>
                <Text>
                    Review  
                    <a href="#watchers" className="color-accent hover:border-b-4 border-accent mx-1">this article</a> 
                    if you want to contribute as a Watcher.
                </Text>
            </DescriptionBox>
            <DescriptionBox title="RSN" img="rosen-architecture-rsn.png">
                <Text>RSN is the utility token of Rosen. Watchers are required to put collateral in RSN and ERG by staking, which allows them to acquire reporting permits. Guards need to lock RSN as collateral. Funds will be emitted to the Guard Set and involved Watchers in case of any successful bridge transfers. However, funds will be slashed/collected in case of malicious behavior. When RSN emission has ended, all bridge fees will be collected in the RSN token. Holding RSN will have special fee benefits for projects. </Text>
            </DescriptionBox>
            <DescriptionBox title="Rewards" img="rosen-architecture-rewards.png" right>
                <Text>Guards are responsible for overseeing the fee structure to create sufficient incentive for all entities. On each successful bridge transfer, the bridge fee will be collected by Guards and a near equivalent amount of RSN will be emitted to the Guard Set and involved Watchers. Guards will add these fees to RSN liquidity pools.</Text>
            </DescriptionBox>
            <DescriptionBox title="Funds" img="rosen-architecture-funds.png">
                <Text>Rosen Fund is a multisig fund controlled by the Guard Set (other entities might be added at a later time). Rosen’s active and passive revenues like bridge fees, listing fees, portions of token sale revenues, and other futuristic incomes will be collected to this fund. Using this fund, Rosen can engage in providing liquidity and bridge into several chains. </Text>
            </DescriptionBox>
            <DescriptionBox title="Cold Storage" img="rosen-architecture-cold.png" right>
                <Text>Bridges are appealing targets for hackers due to the substantial funds they accumulate. Rosen employs multi-signature cold wallets, reducing hackers&apos; incentives. In the event of a bug or hack, only a fraction of the funds will be at risk.</Text>
            </DescriptionBox>
            <div className="clear-both"/>
        </Fragment>
    )
}
