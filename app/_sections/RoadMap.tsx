import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const MapCard = ({number=1, right=false, children}: {number: number, right?: boolean, children: any}) => {
    return (
        <div className="mt-8 md:mt-16 relative">
            <div className={`absolute ${right ? "start-0" : "end-0"} z-1 -translate-y-1/2 ${right ? "-translate-x-1/2" : "translate-x-1/2"} rounded-full bg-secondary color-quaternary font-bold flex justify-center items-center w-10 h-10`}>
                Q{number}
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
            {children}
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
                            completed: true,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        },{
                            completed: true,
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        },{
                            inProgress: true,
                            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        },{
                            completed: true,
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            completed: true,
                            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            completed: true,
                            description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        },{
                            inProgress: true,
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        }
                    ]
                },{
                    items: [
                        {
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        },{
                            inProgress: true,
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        },{
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                }
            ]
        }, {
            year: 2024,
            quarters: [
                {
                    items: [
                        {
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        },{
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        },{
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                },{
                    items: [
                        {
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        },{
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
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
