import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const FeatureCard = ({label, value}: {label: string, value: string}) => {
    return (
        <div className="">
            <div className="text-sm text-secondary">{label}</div>
            <div className="text-2xl text-primary">{value}</div>
        </div>
    )
}

export default function Tokenomics() {
    const data = [
        {
            allocation: "Initial Liquidity Bootstrapping (Ergo and Cardano)",
            count: 1e8,
            percent: 10,
            distribution: "Liquidity pool and ISPO"
        },{
            allocation: "Future Liquidity Bootstrapping (new chains)",
            count: 3.85e8,
            percent: 38.5,
            distribution: "Liquidity on new chains"
        },{
            allocation: "Event-Based Emission (Rewards)",
            count: 2.5e8,
            percent: 25,
            distribution: "Event-based"
        },{
            allocation: "Passive Staking",
            count: 2.5e7,
            percent: 2.5,
            distribution: "Staking rewards"
        },{
            allocation: "Team Budget",
            count: 1.05e8,
            percent: 10.5,
            distribution: "48-Months vested"
        },{
            allocation: "Treasury",
            count: 1.05e8,
            percent: 10.5,
            distribution: "48-Months vested"
        },{
            allocation: "Ergo Foundation",
            count: 3e7,
            percent: 3,
            distribution: "48-Months vested"
        },
    ]
    return (
        <Fragment>
            <Heading
                title="Tokenomics"
                align="left"
                maxWidth="lg"
            />
            <div className="block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                    <div>
                        <p className="text-secondary text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="grid grid-cols-2">
                        <FeatureCard label="Token Name" value="Rosen Bridge Token"/>
                        <FeatureCard label="Token Ticker" value="RSN"/>
                        <FeatureCard label="Max Supply" value={(18).toLocaleString()}/>
                        <FeatureCard label="Initial Liquidity Bootstrapping" value={(1e8).toLocaleString()}/>
                    </div>
                </div>
            </div>
            <div className="w-full bg-primary h-20 mt-8"/>
            <div className="container mx-auto px-0 md:px-8 lg:px-24">
                <div className="w-full -mt-14 overflow-x-auto">
                    <table className="w-full table">
                        <thead>
                        <tr>
                            <th>Token Allocation</th>
                            <th>Number of Tokens</th>
                            <th>% of Total Supply</th>
                            <th>Distribution Method</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row,index) => (
                            <tr key={index}>
                                <td>{row.allocation}</td>
                                <td>{row.count.toLocaleString()}</td>
                                <td>{row.percent}%</td>
                                <td>{row.distribution}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}
