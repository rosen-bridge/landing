import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const FeatureCard = ({label, value}) => {
    return (
        <div className="">
            <div className="text-sm text-secondary">{label}</div>
            <div className="text-lg text-primary">{value}</div>
        </div>
    )
}

export default function Tokenomics() {
    return (
        <Fragment>
            <Heading
                title="Tokenomics"
                align="left"
                maxWidth="lg"
            />
            <div className="block">
                <div className="grid grid-cols-2 gap-16">
                    <div className="">
                        <p className="text-secondary text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="grid grid-cols-2">
                        <FeatureCard label="Token Name" value="Auction House Token"/>
                        <FeatureCard label="Token Ticker" value="AHT"/>
                        <FeatureCard label="Total Distribution" value={(375000000).toLocaleString()}/>
                        <FeatureCard label="Reserved for Utility" value={(125000000).toLocaleString()}/>
                    </div>
                </div>
            </div>

            <div className="w-full bg-primary h-20 mt-8"/>
            <div className="block">
                <table className="w-full table -mt-20">
                    <thead>
                    <tr>
                        <th>Token Allocation</th>
                        <th>Number of Tokens</th>
                        <th>% of Total Supply</th>
                        <th>Price Per Token</th>
                        <th>TGE Issuance (%)</th>
                        <th>Emssion Frequency</th>
                        <th>Cliff (months)</th>
                        <th>Emission Length (MONTHS)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array(8).fill(0).map((row,index) => (
                        <tr>
                            <td>{"Auction House Staker Round"}</td>
                            <td>{(75000000).toLocaleString()}</td>
                            <td>{15}%</td>
                            <td>{0.0015}</td>
                            <td>{0}%</td>
                            <td>{"Daily"}</td>
                            <td>{1}</td>
                            <td>{10}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
