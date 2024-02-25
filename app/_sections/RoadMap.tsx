import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const MapCard = ({number=1, right=false, children}: {number: number, right?: boolean, children: any}) => {
    return (
        <div className="mt-8 md:mt-16 relative">
            <div className={`absolute ${right ? "start-0" : "end-0"} z-1 -translate-y-1/2 ${right ? "-translate-x-1/2" : "translate-x-1/2"} rounded-full bg-secondary color-quaternary font-bold flex justify-center items-center w-10 h-10`}>
                {/* Q{number} */}
            </div>
            <div className="h-2 bg-secondary rounded-tl-lg rounded-tr-lg"/>
            <div className={`${right ? "ms-8 md:ms-16" : "me-16"}`}>
                <div className="bg-glass right:bg-primary rounded-bl-lg rounded-br-lg shadow-md p-4 md:p-8 flex flex-col gap-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

const MapItem = ({description, completed=false, inProgress=false}: {description: string, completed?: boolean, inProgress?: boolean}) => {
    return (
        <div className="flex gap-4">
            <div className={`basis-4 text-xl ${completed ? "text-green-600" : "text-secondary"}`}>
                <i className={`uil ${completed ? "uil-check-circle" : "uil-circle"}`}/>
            </div>
            <div>
                <p>
                    {description}
                    {inProgress && <span className="bg-blue-600 text-white text-sm whitespace-nowrap rounded-full px-3 ms-3">In progress</span>}
                </p>
            </div>
        </div>
    )
}

const MapYear = ({children}: {children: number}) => {
    return (
        <div className="-ms-10 md:mx-auto w-20 h-20 rounded-full bg-primary color-quaternary flex justify-center items-center text-lg	font-bold">
            {/* {children} */}
        </div>
    )
}

const StickyBackground = () => (
    <div className="sticky top-0 -z-10 w-full h-0">
        <svg viewBox="0 0 160 90" className="blur-2xl opacity-10">
            <circle cx={120} cy={30} r={40} className="cold"/>
            <circle cx={40} cy={60} r={30} className="hot"/>
        </svg>
    </div>
)

export default function RoadMap() {
    const roadMapData = [
        {
            year: 2023,
            quarters: [
                {
                    items: [
                        {
                            description: "EVM chain adaptor",
                            completed: false,
                            inProgress: false,
                        },{
                            description: "Ethereum bridge",
                            inProgress: true,
                        },{
                            description: "Binance Smart Chain bridge",
                        },{
                            description: "More EVM-chains integration",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Expanding the Guard Set",
                        },{
                            description: "Cold wallets activation",
                            inProgress: true,
                        },{
                            description: "Cross-chain bridging (Ethereum-Cardano bridge)",
                        },{
                            description: "Additional data sources support for integrated chains",
                            inProgress: true,
                        }
                    ]
                },{
                    items: [
                        {
                            description: "Cardano bridge",
                            completed: true,
                        },{
                            description: "Bitcoin bridge",
                            inProgress: true,
                        },{
                            description: "Dogecoin bridge",
                        },{
                            description: "More non-EVM bridges",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "UI/UX improvements",
                        },{
                            description: "Wallet integrations",
                        },{
                            description: "Rosen SDK",
                        },
                    ]
                },{
                    items: [
                        {
                            description: "Enable fee payment with RSN token",
                        },{
                            description: "Market making and liquidity provisioning for listed tokens",
                        },{
                            description: "Chain Integration Kit for adding new volunteer chains",
                        },{
                            description: "Integration with bridge aggregators and hubs",
                        },{
                            description: "NFT bridge",
                        },{
                            description: "Data bridge",
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <Fragment>
            <Heading
                title="Road map"
            />
            <StickyBackground/>
            <div className="md:hidden mt-8 ml-12 mr-6">
                {roadMapData.map((section,index) => (
                    <Fragment key={index}>
                        <div>
                            <MapYear>{section.year}</MapYear>
                        </div>
                        <div className="pb-8 border-s-2 border-dashed">
                            <div className="h-1"/>
                            {section.quarters.map((quarter,qIndex) => (
                                <MapCard right number={qIndex+1} key={qIndex}>
                                    {quarter.items.map((item,iIndex) => (
                                        <MapItem key={iIndex} {...item}/>
                                    ))}
                                </MapCard>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
            <div className="block hidden md:grid grid-cols-2 mt-8">
                {roadMapData.map((section,index) => (
                    <Fragment key={index}>
                        <div className="col-span-2">
                            <MapYear>{section.year}</MapYear>
                        </div>
                        <div className="col-span-1 pb-8 border-e-2 lg:border-e-4 border-dashed">
                            {section.quarters.filter(i => !i.right).map((quarter,qIndex) => (
                                <MapCard number={2*qIndex+1} key={qIndex}>
                                    {quarter.items.map((item,iIndex) => (
                                        <MapItem key={iIndex} {...item}/>
                                    ))}
                                </MapCard>
                            ))}
                        </div>
                        <div className="col-span-1 pb-8">
                            <div className="h-24"/>
                            {section.quarters.filter(i => i.right).map((quarter,qIndex) => (
                                <MapCard right number={2*qIndex+2} key={qIndex}>
                                    {quarter.items.map((item,iIndex) => (
                                        <MapItem key={iIndex} {...item}/>
                                    ))}
                                </MapCard>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
}
